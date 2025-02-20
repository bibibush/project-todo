"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

interface registerUserParams {
  email: string;
  name: string;
  password: string;
}

export default async function registerUser(params: registerUserParams) {
  try {
    const hashedPassword = await bcrypt.hash(params.password, 12);

    if (!hashedPassword) {
      return Promise.reject(new Error("알 수 없는 에러가 발생했습니다."));
    }

    const response = await prisma.user.create({
      data: {
        email: params.email,
        name: params.name,
        hashedPassword,
      },
    });

    if (!response) {
      return Promise.reject(
        new Error("회원가입이 정상적으로 이루어지지 않았습니다.")
      );
    }

    return response;
  } catch {
    return Promise.reject(
      new Error("회원가입이 정상적으로 이루어지지 않았습니다.")
    );
  }
}
