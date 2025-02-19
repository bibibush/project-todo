import Completeds from "@/types/Completeds";
import CompletedHeader from "./CompletedHeader";
import Task from "@/components/Task";
import { useState } from "react";

interface CompletedProps {
  completeds: Completeds[];
  refetch: () => void;
}

function Completed({ completeds, refetch }: CompletedProps) {
  const [isAsc, setAsc] = useState<boolean>(true);
  const handleSetAsc = () => {
    setAsc(!isAsc);
  };

  const sortedCompleteds = isAsc
    ? completeds.sort((a, b) => a.expireDate.getTime() - b.expireDate.getTime())
    : completeds.sort(
        (a, b) => b.expireDate.getTime() - a.expireDate.getTime()
      );

  return (
    <div className="flex flex-col w-[350px] items-center gap-3 min-h-full">
      <CompletedHeader
        count={completeds.length}
        isAsc={isAsc}
        setAsc={handleSetAsc}
      />

      {!!completeds.length &&
        sortedCompleteds.map((com) => (
          <Task
            key={com.id}
            id={com.id}
            category={com.category}
            title={com.title}
            description={com.description}
            expireDate={com.expireDate}
            refetch={refetch}
          />
        ))}
    </div>
  );
}

export default Completed;
