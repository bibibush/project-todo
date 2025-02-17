"use server";

import { prisma } from "@/lib/prisma";
import ErrorResponse from "@/types/ErrorResponse";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";

export default async function createAdmin(): Promise<User> {
  const isAlready = await prisma.user.findUnique({
    where: {
      email: "admin@admin.com",
    },
  });

  if (isAlready) {
    const error: ErrorResponse = Object.assign(new Error("unauthorized"), {
      status: 400,
      statusText: "이미 admin이 있습니다.",
    });

    return Promise.reject(error);
  }

  const hashedPassword = await bcrypt.hash("admin1234!@#$", 12);

  const res = await prisma.user.create({
    data: {
      email: "admin@admin.com",
      hashedPassword,
    },
  });

  if (!res) {
    const error = Object.assign(new Error("unknow error"), {
      status: 500,
      statusText: "알 수 없는 에러가 발생했습니다.",
    });

    return Promise.reject(error);
  }

  return Promise.resolve(res);
}
