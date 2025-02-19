"use client";

import { useForm } from "react-hook-form";
import CustomInputForm from "../Forms/CustomInputForm";
import { Form } from "../ui/form";
import { useRouter, useSearchParams } from "next/navigation";
import { Textarea } from "../ui/textarea";
import CheckList from "./CheckList";
import { useCallback, useState } from "react";
import { Calendar } from "../ui/calendar";
import { ko } from "date-fns/locale";
import { Button } from "../ui/button";
import Link from "next/link";
import Step from "./Step";
import { add, format } from "date-fns";
import createTask from "@/serverActions/createTask";
import { Category } from "@prisma/client";
import revalidate from "@/serverActions/revalidate";

interface CreateParams {
  title: string;
  description: string;
}

export interface CheckListType {
  id: string;
  done: boolean;
  label: string;
}

export enum Selected {
  TODO = 1,
  PROGRESS,
  COMPLETED,
}

function CreatePage() {
  const param = useSearchParams();
  const category = param.get("category");

  const router = useRouter();

  const [checkListData, setCheckListData] = useState<Array<CheckListType>>([
    { id: `check-${1}`, done: false, label: "테스트" },
  ]);
  const [selected, setSelected] = useState<Selected>(Selected.TODO);
  const [date, setDate] = useState<Date | undefined>(
    add(new Date(), { days: 7 })
  );

  const handleSelect = useCallback((value: Selected) => {
    setSelected(value);
  }, []);

  const changeCheckListData = (checkList: CheckListType[]) => {
    setCheckListData(checkList);
  };

  const methods = useForm<CreateParams>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const submitForm = async (data: CreateParams) => {
    try {
      const postObject = {
        ...data,
        category: Selected[selected] as Category,
        expireDate: date ?? new Date(),
        done: selected === Selected.COMPLETED ? true : false,
        checkList: checkListData,
      };

      await createTask(postObject);
      await revalidate();
      router.replace("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="p-5 flex justify-between items-start min-h-full">
      <div>
        <Form {...methods}>
          <form
            className="flex flex-col gap-3"
            onSubmit={methods.handleSubmit(submitForm)}
          >
            <CustomInputForm
              className="w-[600px]"
              control={methods.control}
              name="title"
              rules={{
                required: {
                  value: true,
                  message: "제목은 필수입니다.",
                },
              }}
              placeholder="제목을 입력해주세요."
            />
            <Textarea
              className="w-[600px]"
              placeholder="간단한 설명을 적어주세요."
              {...methods.register("description")}
            />

            <div className="fixed bottom-10 2xl:right-[270px] 3xl:right-[400px] flex items-center gap-3">
              <Link href="/">
                <Button type="button" variant="destructive">
                  취소
                </Button>
              </Link>
              <Button type="submit" variant="primaryBlue">
                저장
              </Button>
            </div>
          </form>
        </Form>

        <CheckList
          checkListData={checkListData}
          onChangeCheckList={changeCheckListData}
        />
      </div>

      <div className="flex flex-col items-center gap-3">
        <Step category={category} selected={selected} onSelect={handleSelect} />

        <div className="w-[400px] flex items-center justify-center mt-14">
          <Calendar
            mode="single"
            className="bg-white rounded-xl"
            disabled={{ before: new Date() }}
            locale={ko}
            selected={date}
            onSelect={setDate}
          />
        </div>
        <span className="font-bold text-lg">
          {!!date && `${format(date, "yyyy-MM-dd")} 까지`}
        </span>
      </div>
    </div>
  );
}

export default CreatePage;
