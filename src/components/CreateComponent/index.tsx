"use client";

import { useForm } from "react-hook-form";
import CustomInputForm from "../Forms/CustomInputForm";
import { Form } from "../ui/form";
import { useSearchParams } from "next/navigation";
import { Textarea } from "../ui/textarea";
import CheckList from "./CheckList";

interface CreateParams {
  title: string;
  description: string;
}

function CreatePage() {
  const param = useSearchParams();
  const category = param.get("category");
  console.log(category);

  const methods = useForm<CreateParams>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  return (
    <div className="p-5">
      <Form {...methods}>
        <form className="flex flex-col gap-3">
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

      <CheckList />
    </div>
  );
}

export default CreatePage;
