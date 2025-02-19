import Progresses from "@/types/Progresses";
import ProgressHeader from "./ProgressHeader";
import Task from "@/components/Task";

interface ProgressProps {
  progresses: Progresses[];
}

function Progress({ progresses }: ProgressProps) {
  return (
    <div className="flex flex-col w-[350px] items-center gap-3 min-h-full">
      <ProgressHeader count={progresses.length} />

      {!!progresses.length &&
        progresses.map((progress) => (
          <Task
            key={progress.id}
            title={progress.title}
            description={progress.description}
            expireDate={progress.expireDate}
          />
        ))}
    </div>
  );
}

export default Progress;
