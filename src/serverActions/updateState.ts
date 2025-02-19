"use server";

import { error } from "@/vars/error";
import authorize from "./authorize";
import { prisma } from "@/lib/prisma";
import { Category } from "@prisma/client";

export default async function updateState(taskId: string, category: string) {
  const userId = await authorize();
  if (!userId) {
    return Promise.reject(error);
  }

  const response = await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      category: category as Category,
    },
  });

  return response;
}
