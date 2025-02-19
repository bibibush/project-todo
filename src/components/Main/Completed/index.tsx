import Completeds from "@/types/Completeds";
import CompletedHeader from "./CompletedHeader";
import Task from "@/components/Task";

interface CompletedProps {
  completeds: Completeds[];
}

function Completed({ completeds }: CompletedProps) {
  return (
    <div className="flex flex-col w-[350px] items-center gap-3 min-h-full">
      <CompletedHeader count={completeds.length} />

      {!!completeds.length &&
        completeds.map((com) => (
          <Task
            key={com.id}
            title={com.title}
            description={com.description}
            expireDate={com.expireDate}
          />
        ))}
    </div>
  );
}

export default Completed;
