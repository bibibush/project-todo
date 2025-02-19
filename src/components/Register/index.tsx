"use client";

import { RegisterOptions, useForm } from "react-hook-form";
import CustomInputForm from "../Forms/CustomInputForm";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { useState } from "react";

interface RegisterParams {
  email: string;
  password1: string;
  password2: string;
  name: string;
}

function Register() {
  const methods = useForm<RegisterParams>({
    defaultValues: {
      email: "",
      password1: "",
      password2: "",
      name: "",
    },
  });
  const [isLoading, setLoading] = useState<boolean>(false);

  const emailRule: RegisterOptions<RegisterParams> = {
    required: {
      value: true,
      message: "이메일은 필수입력항목입니다.",
    },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "이메일 형식으로 입력해주세요.",
    },
  };
  const password1Rule: RegisterOptions<RegisterParams> = {
    required: {
      value: true,
      message: "비밀번호는 필수입력항목입니다.",
    },
    pattern: {
      value: /^(?=(.*[a-zA-Z]))(?=(.*[0-9]))(?=(.*[\W_]))[a-zA-Z0-9\W_]{8,}$/,
      message:
        "비밀번호는 하나 이상의 영문자, 숫자,특수기호가 들어간 8자리 이상이여야 합니다.",
    },
  };
  const password2Rule: RegisterOptions<RegisterParams> = {
    required: {
      value: true,
      message: "비밀번호 확인은 필수입력항목입니다.",
    },
    validate: (value) =>
      value === methods.getValues("password1") || "비밀번호 값이 다릅니다.",
  };

  const submitToRegister = (data: RegisterParams) => {
    setLoading(true);
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center p-10 gap-10">
      <h1 className="text-3xl font-bold mt-16">회원가입</h1>

      <Form {...methods}>
        <form
          className="w-[400px] flex flex-col gap-5 items-center mt-20"
          onSubmit={methods.handleSubmit(submitToRegister)}
        >
          <CustomInputForm
            className="w-[400px]"
            control={methods.control}
            name="email"
            label="email"
            rules={emailRule}
          />
          <CustomInputForm
            className="w-[400px]"
            control={methods.control}
            name="name"
            label="이름"
            rules={{
              required: { value: true, message: "이름은 필수입력값입니다." },
            }}
          />
          <CustomInputForm
            className="w-[400px]"
            control={methods.control}
            name="password1"
            label="비밀번호"
            rules={password1Rule}
            isPassword
          />
          <CustomInputForm
            className="w-[400px]"
            control={methods.control}
            name="password2"
            label="비밀번호 확인"
            rules={password2Rule}
            isPassword
          />

          <Button
            className="w-[50%] bg-blue-300 hover:bg-blue-400 text-blue-700 font-semibold"
            disabled={isLoading}
          >
            회원가입
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Register;
