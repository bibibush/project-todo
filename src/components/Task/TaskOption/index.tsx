"use client";

import ChangeStateModal from "@/components/modals/ChangeStateModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MouseEvent, useState } from "react";

interface TaskOptionProps {
  id: string;
  category: string;
  refetch: () => void;
}

function TaskOptions({ id, category, refetch }: TaskOptionProps) {
  const [isOpenChangeStateModal, setOpenChangeStateModal] =
    useState<boolean>(false);
  const handleOpenChangeStateModal = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setOpenChangeStateModal(true);
  };
  const handleCloseChangeStateModal = () => {
    setOpenChangeStateModal(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">...</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={handleOpenChangeStateModal}
        >
          프로젝트 상태 변경
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
          프로젝트 삭제
        </DropdownMenuItem>
      </DropdownMenuContent>
      {isOpenChangeStateModal && (
        <ChangeStateModal
          id={id}
          category={category}
          isOpen={isOpenChangeStateModal}
          onClose={handleCloseChangeStateModal}
          refetch={refetch}
        />
      )}
    </DropdownMenu>
  );
}

export default TaskOptions;
