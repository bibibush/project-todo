"use server";

import { prisma } from "@/lib/prisma";
import authorize from "./authorize";
import { Task } from "@prisma/client";

export default async function getTasks(): Promise<Task[]> {
  try {
    const userId = await authorize();

    const tasks = await prisma.task.findMany({
      where: {
        userId,
      },
    });

    return tasks;
  } catch (e) {
    return Promise.reject(e);
  }
}
