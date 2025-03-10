import { format } from "date-fns";
import { useRouter } from "next/navigation";
import TaskOptions from "./TaskOption";
import { cn } from "@/lib/utils";
import { IoCheckmarkDone } from "react-icons/io5";

interface TaskProps {
  category: string;
  id: string;
  title: string;
  description: string | null;
  expireDate: Date;
  refetch: () => void;
}

function Task({
  id,
  category,
  title,
  description,
  expireDate,
  refetch,
}: TaskProps) {
  const router = useRouter();

  const clickToModify = () => {
    router.push(`/${id}`);
  };

  return (
    <div
      className="border-gray-400 bg-white border rounded-lg w-full min-h-[180px] cursor-pointer flex flex-col shadow-black/50 shadow-md"
      onClick={clickToModify}
    >
      <div className="flex-1 flex flex-col gap-5 border-b-2 border-gray-400 py-3 px-4">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">{title}</p>
          <TaskOptions id={id} category={category} refetch={refetch} />
        </div>
        <div className="text-gray-500 text-sm text-ellipsis break-words">
          {(description?.length ?? 0) > 80
            ? `${description?.slice(0, 80)}...`
            : description}
        </div>
      </div>
      <div
        className={cn("px-4 py-2 h-10 flex items-center justify-between gap-2")}
      >
        <div>
          {category === "COMPLETED" ? (
            <div className="flex items-center gap-2 text-[#78C552]">
              <IoCheckmarkDone /> DONE
            </div>
          ) : (
            ""
          )}
        </div>
        <span
          className={cn(
            expireDate <= new Date() && category !== "COMPLETED"
              ? "text-red-600"
              : "text-gray-500"
          )}
        >
          {format(expireDate, "yyyy-MM-dd")} 까지
        </span>
      </div>
    </div>
  );
}

export default Task;
