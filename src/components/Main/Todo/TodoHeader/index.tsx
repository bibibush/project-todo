import { Badge } from "@/components/ui/badge";

function TodoHeader() {
  return (
    <div className="flex items-center w-full justify-between p-3 border-b-[3px] border-[#1E293B]">
      <span className="flex gap-3">
        <p className="text-xl">TODO</p>
        <Badge variant="outline">2</Badge>
      </span>
      <p className="text-xl">...</p>
    </div>
  );
}

export default TodoHeader;
