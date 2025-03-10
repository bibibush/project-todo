"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { CheckListType } from "../..";
import { ChangeEvent } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

interface CheckItemProps {
  id: string;
  done: boolean;
  label: string;
  checkList: CheckListType[];
  onChangeCheckList: (checkList: CheckListType[]) => void;
}

function CheckItem({
  id,
  done,
  label,
  checkList,
  onChangeCheckList,
}: CheckItemProps) {
  const handleClickCheckBox = (value: boolean | "indeterminate") => {
    if (value === "indeterminate") {
      return;
    }

    const newObject = [...checkList];
    const currentCheckBox = newObject.find((check) => check.id === id);
    if (!currentCheckBox) {
      return;
    }

    currentCheckBox.done = value;
    onChangeCheckList(newObject);
  };

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newObject = [...checkList];
    const currentInput = newObject.find((check) => check.id === id);
    if (!currentInput) {
      return;
    }

    currentInput.label = e.target.value;
    onChangeCheckList(newObject);
  };

  const handleDeleteCheckList = () => {
    const newObject = [...checkList];
    const checkToDelete = newObject.find((check) => check.id === id);
    if (!checkToDelete) {
      return;
    }

    const resultList = newObject.filter((obj) => obj.id !== checkToDelete.id);
    onChangeCheckList(resultList);
  };

  return (
    <div className="flex gap-4 items-center text-lg">
      <Checkbox
        id={id}
        checked={done}
        onCheckedChange={handleClickCheckBox}
        className="size-6"
      />
      <Input
        className="bg-transparent border-0 h-8"
        style={
          done
            ? { textDecorationLine: "line-through", fontSize: "18px" }
            : { textDecorationLine: "none", fontSize: "18px" }
        }
        value={label}
        onChange={handleChangeInputValue}
      />
      <FaRegTrashAlt
        className="cursor-pointer"
        onClick={handleDeleteCheckList}
      />
    </div>
  );
}

export default CheckItem;
