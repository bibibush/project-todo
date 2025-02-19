"use server";

import { prisma } from "@/lib/prisma";
import authorize from "./authorize";
import { Task } from "@prisma/client";
import { error } from "@/vars/error";

export default async function getTasks(): Promise<Task[]> {
  const userId = await authorize();

  if (!userId) {
    return Promise.reject(error);
  }

  const tasks = await prisma.task.findMany({
    where: {
      userId,
    },
  });

  return tasks;
}
