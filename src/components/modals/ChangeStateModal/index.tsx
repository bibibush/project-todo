"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import updateState from "@/serverActions/updateState";
import { useState } from "react";

interface ChangeStateModal {
  id: string;
  category: string;
  isOpen: boolean;
  onClose: () => void;
  refetch: () => void;
}

function ChangeStateModal({
  id,
  category,
  isOpen,
  onClose,
  refetch,
}: ChangeStateModal) {
  const [selected, setSelected] = useState<string>(category);

  const handleSubmit = async () => {
    try {
      await updateState(id, selected);
      await refetch();
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="min-h-[250px]"
        onClick={(e) => e.stopPropagation()}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>상태 변경</DialogTitle>
          <DialogDescription />
        </DialogHeader>

        <div className="flex flex-col items-center gap-10">
          <Select defaultValue={selected} onValueChange={setSelected}>
            <SelectTrigger className="w-[300px] border-2">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="TODO">TODO</SelectItem>
              <SelectItem value="PROGRESS">진행중</SelectItem>
              <SelectItem value="COMPLETED">완료</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-3 justify-end w-full">
            <Button variant="destructive" onClick={onClose}>
              취소
            </Button>
            <Button variant="primaryBlue" onClick={handleSubmit}>
              변경
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ChangeStateModal;
