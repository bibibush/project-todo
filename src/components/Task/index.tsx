import { format } from "date-fns";
import { Badge } from "../ui/badge";

interface TaskProps {
  title: string;
  description: string | null;
  expireDate: Date;
}

function Task({ title, description, expireDate }: TaskProps) {
  return (
    <div className="border-gray-400 bg-white border rounded-lg w-full">
      <div className="flex flex-col gap-3 border-b-2 border-gray-400 py-3 px-4">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">{title}</p>
          <Badge className="rounded-lg" variant="outline">
            ...
          </Badge>
        </div>
        <div className="text-gray-500 text-sm">{description}</div>
        <Badge className="w-20 flex justify-center rounded-lg">하이</Badge>
      </div>
      <div className="px-4 py-2 flex items-center justify-end gap-2 text-gray-500">
        {format(expireDate, "yyyy-MM-dd")}
      </div>
    </div>
  );
}

export default Task;
