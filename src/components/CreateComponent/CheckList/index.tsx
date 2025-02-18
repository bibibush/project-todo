"use client";

import { Button } from "@/components/ui/button";
import { CheckListType } from "..";
import CheckItem from "./CheckItem";

interface CheckListProps {
  checkListData: CheckListType[];
  onChangeCheckList: (checkList: CheckListType[]) => void;
}

function CheckList({ checkListData, onChangeCheckList }: CheckListProps) {
  const addCheckList = () => {
    let idNumber = 0;
    if (checkListData.length) {
      idNumber = Number(
        checkListData[checkListData.length - 1].id.split("-")[1]
      );
    }

    onChangeCheckList([
      ...checkListData,
      { id: `check-${idNumber + 1}`, done: false, label: "새로 할 일" },
    ]);
  };

  return (
    <div className="flex flex-col mt-16 gap-3 w-[600px]">
      <div className="flex border-b-2 border-gray-500 py-2 items-center justify-between">
        <p className="text-4xl">체크 리스트</p>
        <Button variant="primaryBlue" onClick={addCheckList}>
          추가하기
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        {!!checkListData.length &&
          checkListData.map((check) => (
            <CheckItem
              key={check.id}
              id={check.id}
              done={check.done}
              label={check.label}
              checkList={checkListData}
              onChangeCheckList={onChangeCheckList}
            />
          ))}
      </div>
    </div>
  );
}

export default CheckList;
