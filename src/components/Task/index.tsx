import { format } from "date-fns";
import { Badge } from "../ui/badge";

function Task() {
  return (
    <div className="border-gray-400 bg-white border rounded-lg w-full">
      <div className="flex flex-col gap-3 border-b-2 border-gray-400 py-3 px-4">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">TITLE</p>
          <Badge className="rounded-lg" variant="outline">
            ...
          </Badge>
        </div>
        <div className="text-gray-500 text-sm">
          이것은 TODO에 대한 설명입니다.
        </div>
        <Badge className="w-20 flex justify-center rounded-lg">하이</Badge>
      </div>
      <div className="px-4 py-3 flex items-center justify-end gap-2 text-gray-500">
        {format(new Date(), "yyyy-MM-dd")}
      </div>
    </div>
  );
}

export default Task;
