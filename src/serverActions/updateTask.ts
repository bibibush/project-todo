"use server";

import { CheckListType } from "@/components/CreateComponent";
import { Category } from "@prisma/client";
import authorize from "./authorize";
import { error } from "@/vars/error";
import { prisma } from "@/lib/prisma";

interface updateTaskParms {
  title: string;
  description: string;
  category: Category;
  expireDate: Date;
  done: boolean;
  checkList: CheckListType[];
}

export default async function updateTask(
  taskId: string | undefined,
  data: updateTaskParms
) {
  const userId = await authorize();
  if (!userId) {
    return Promise.reject(error);
  }
  if (!taskId) {
    return Promise.reject(new Error("task가 존재하지 않습니다."));
  }

  const checkListData = data.checkList.map((check) => ({
    done: check.done,
    label: check.label,
  }));

  const response = await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      ...data,
      userId,
      checkList: JSON.stringify(checkListData),
    },
  });

  return response;
}
