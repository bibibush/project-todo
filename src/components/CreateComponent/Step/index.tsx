"use client";

import React, { useEffect } from "react";
import StepItem from "./StepItem";
import { Selected } from "..";

interface StepProps {
  category: string | null;
  selected: Selected;
  onSelect: (value: Selected) => void;
}

function Step({ category, selected, onSelect }: StepProps) {
  useEffect(() => {
    if (!category) {
      return;
    }

    let value = 1;
    switch (category) {
      case "TODO":
        value = 1;
        break;
      case "PROGRESS":
        value = 2;
        break;
      case "COMPLETED":
        value = 3;
        break;
    }

    onSelect(value);
  }, [category, onSelect]);

  return (
    <div className="relative border-2 border-dashed border-gray-500 w-[320px]">
      <div className="absolute flex justify-between w-[400px] left-[-50px] top-[-20px]">
        <StepItem
          selected={selected}
          step={Selected.TODO}
          onSelect={onSelect}
        />
        <StepItem
          selected={selected}
          step={Selected.PROGRESS}
          onSelect={onSelect}
        />
        <StepItem
          selected={selected}
          step={Selected.COMPLETED}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}

export default React.memo(Step);
