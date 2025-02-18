"use client";

import { useForm } from "react-hook-form";
import CustomInputForm from "../Forms/CustomInputForm";
import { Form } from "../ui/form";
import { useSearchParams } from "next/navigation";
import { Textarea } from "../ui/textarea";
import CheckList from "./CheckList";
import { useState } from "react";
import { Calendar } from "../ui/calendar";
import { ko } from "date-fns/locale";
import { Button } from "../ui/button";
import Link from "next/link";

interface CreateParams {
  title: string;
  description: string;
}

export interface CheckListType {
  id: string;
  done: boolean;
  label: string;
}

function CreatePage() {
  const param = useSearchParams();
  const category = param.get("category");

  const [checkListData, setCheckListData] = useState<Array<CheckListType>>([
    { id: `check-${1}`, done: false, label: "테스트" },
  ]);

  const changeCheckListData = (checkList: CheckListType[]) => {
    setCheckListData(checkList);
  };

  const methods = useForm<CreateParams>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const submitForm = (data: CreateParams) => {
    console.log(data);
    console.log(category);
  };

  return (
    <div className="p-5 flex justify-between items-start h-full">
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
          </form>
        </Form>

        <CheckList
          checkListData={checkListData}
          onChangeCheckList={changeCheckListData}
        />
      </div>

      <div className="w-[400px] flex items-center justify-center">
        <Calendar className="bg-white rounded-xl" locale={ko} />
      </div>
      <div className="absolute bottom-10 2xl:right-[270px] 3xl:right-[400px] flex items-center gap-3">
        <Link href="/">
          <Button variant="destructive">취소</Button>
        </Link>
        <Button variant="primaryBlue">저장</Button>
      </div>
    </div>
  );
}

export default CreatePage;
