"use client";

import { RegisterOptions, useForm } from "react-hook-form";
import { Form } from "../ui/form";
import CustomInputForm from "../Forms/CustomInputForm";
import { Button } from "../ui/button";
import { signIn, SignInOptions } from "next-auth/react";
import { useState } from "react";

interface SignInParams extends SignInOptions {
  email: string;
  password: string;
}

function SignIn() {
  const methods = useForm<SignInParams>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setLoading] = useState<boolean>(false);

  const emailRule: RegisterOptions<SignInParams> = {
    required: {
      value: true,
      message: "이메일은 필수입력항목입니다.",
    },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "이메일 형식으로 입력해주세요.",
    },
  };
  const passwordRule: RegisterOptions<SignInParams> = {
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

  const handleSignIn = async (data: SignInParams) => {
    try {
      setLoading(true);
      await signIn("credentials", data);
    } catch (e) {
      console.error(e);
      setLoading(false);
      alert(e);
    }
  };

  return (
    <div className="flex flex-col items-center p-10 gap-10">
      <h1 className="text-3xl font-bold mt-16">Log In</h1>

      <Form {...methods}>
        <form
          className="w-[400px] flex flex-col gap-5 items-center mt-20"
          onSubmit={methods.handleSubmit(handleSignIn)}
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
            name="password"
            label="password"
            rules={passwordRule}
            isPassword
          />

          <Button
            className="w-[50%] bg-blue-300 hover:bg-blue-400 text-blue-700 font-semibold"
            disabled={isLoading}
          >
            로그인
          </Button>
        </form>
      </Form>
      <div className="mt-10">
        <p className="text-sm">
          기본 아이디:{" "}
          <span className="text-base font-bold">admin@admin.com</span>
        </p>
        <p className="text-sm">
          기본 비밀번호:{" "}
          <span className="text-base font-bold">admin1234!@#$</span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
