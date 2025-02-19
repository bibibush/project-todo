import { format } from "date-fns";
import { Button } from "../ui/button";

interface TaskProps {
  title: string;
  description: string | null;
  expireDate: Date;
}

function Task({ title, description, expireDate }: TaskProps) {
  return (
    <div className="border-gray-400 bg-white border rounded-lg w-full cursor-pointer">
      <div className="flex flex-col gap-3 border-b-2 border-gray-400 py-3 px-4">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">{title}</p>
          <Button variant="ghost">...</Button>
        </div>
        <div className="text-gray-500 text-sm">{description}</div>
      </div>
      <div className="px-4 py-2 flex items-center justify-end gap-2 text-gray-500">
        {format(expireDate, "yyyy-MM-dd")} 까지
      </div>
    </div>
  );
}

export default Task;
