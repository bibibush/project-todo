import Progresses from "@/types/Progresses";
import ProgressHeader from "./ProgressHeader";
import Task from "@/components/Task";
import { useState } from "react";

interface ProgressProps {
  progresses: Progresses[];
  refetch: () => void;
}

function Progress({ progresses, refetch }: ProgressProps) {
  const [isAsc, setAsc] = useState<boolean>(true);
  const handleSetAsc = () => {
    setAsc(!isAsc);
  };

  const sortedProgresses = isAsc
    ? progresses.sort((a, b) => a.expireDate.getTime() - b.expireDate.getTime())
    : progresses.sort(
        (a, b) => b.expireDate.getTime() - a.expireDate.getTime()
      );

  return (
    <div className="flex flex-col w-[350px] items-center gap-3 min-h-full">
      <ProgressHeader
        count={progresses.length}
        isAsc={isAsc}
        setAsc={handleSetAsc}
      />

      {!!progresses.length &&
        sortedProgresses.map((progress) => (
          <Task
            key={progress.id}
            id={progress.id}
            category={progress.category}
            title={progress.title}
            description={progress.description}
            expireDate={progress.expireDate}
            refetch={refetch}
          />
        ))}
    </div>
  );
}

export default Progress;
