"use server";

import { error } from "@/vars/error";
import authorize from "./authorize";
import { prisma } from "@/lib/prisma";

export default async function deleteTask(taskId: string) {
  const userId = await authorize();
  if (!userId) {
    return Promise.reject(error);
  }

  const response = await prisma.task.delete({
    where: {
      id: taskId,
    },
  });

  return response;
}
