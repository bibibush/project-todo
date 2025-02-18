import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function TodoHeader() {
  return (
    <div
      className={cn(
        "bg-white rounded-t-md flex items-center justify-between w-full p-3 border-b-[3px] border-[#1E293B] sticky top-0"
      )}
    >
      <span className="flex gap-3">
        <p className="text-xl">TODO</p>
        <Badge variant="outline">2</Badge>
      </span>
      <p className="text-xl">...</p>
    </div>
  );
}

export default TodoHeader;
