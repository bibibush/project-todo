"use server";

import { error } from "@/vars/error";
import authorize from "./authorize";
import { prisma } from "@/lib/prisma";

export default async function getTask(taskId: string) {
  const userId = await authorize();
  if (!userId) {
    return Promise.reject(error);
  }

  if (!taskId) {
    return Promise.reject(new Error("unknown Error"));
  }

  const response = await prisma.task.findUnique({
    where: {
      id: taskId,
    },
  });

  if (!response) {
    return Promise.reject(new Error("500 Error"));
  }

  return response;
}
