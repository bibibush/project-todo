"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

function CheckItem() {
  const [isChecked, setChecked] = useState<boolean | "indeterminate">(false);

  return (
    <div className="flex gap-4 items-center text-lg">
      <Checkbox id="1" onCheckedChange={(checked) => setChecked(checked)} />
      <label
        className="cursor-pointer"
        htmlFor="1"
        style={
          isChecked
            ? { textDecorationLine: "line-through" }
            : { textDecorationLine: "none" }
        }
      >
        테스트
      </label>
    </div>
  );
}

export default CheckItem;
