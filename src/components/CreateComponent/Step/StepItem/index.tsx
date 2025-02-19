import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Selected } from "../..";

interface StepItemProps {
  selected: number;
  step: number;
  onSelect: (value: Selected) => void;
}
enum Category {
  TODO = 1,
  "진행중",
  "완료",
}

function StepItem({ selected, step, onSelect }: StepItemProps) {
  const [isPassed, setIsPassed] = useState<boolean>(false);

  const handleStyle = () => {
    if (!(selected === step)) {
      return "bg-gray-300 text-black";
    }

    switch (step) {
      case 1:
        return "bg-[#1E293B] text-white";
      case 2:
        return "bg-[#306BFF] text-white";
      case 3:
        return "bg-[#78C552] text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };

  useEffect(() => {
    if (step < selected) {
      setIsPassed(true);
    } else {
      setIsPassed(false);
    }
  }, [step, selected]);

  return (
    <div
      className="flex flex-col items-center gap-2 w-[100px]"
      onClick={() => onSelect(step)}
    >
      <div
        className={cn(
          "rounded-full size-10 flex justify-center items-center text-sm cursor-pointer",
          handleStyle()
        )}
      >
        {isPassed ? <FaCheck /> : step}
      </div>
      <p className="text-sm">{Category[step]}</p>
    </div>
  );
}

export default StepItem;
