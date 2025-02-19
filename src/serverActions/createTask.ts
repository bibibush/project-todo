"use server";

import { CheckListType } from "@/components/CreateComponent";
import { Category } from "@prisma/client";
import authorize from "./authorize";
import { prisma } from "@/lib/prisma";
import { error } from "@/vars/error";

interface createTaskParams {
  title: string;
  description: string;
  category: Category;
  expireDate: Date;
  done: boolean;
  checkList: CheckListType[];
}

export default async function createTask(data: createTaskParams) {
  const userId = await authorize();
  if (!userId) {
    return Promise.reject(error);
  }

  const checkListData = data.checkList.map((check) => ({
    done: check.done,
    label: check.label,
  }));

  const response = await prisma.task.create({
    data: {
      ...data,
      userId,
      checkList: JSON.stringify(checkListData),
    },
  });

  return response;
}
