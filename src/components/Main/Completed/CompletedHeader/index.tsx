import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function CompletedHeader() {
  return (
    <div
      className={cn(
        "bg-white rounded-t-md flex items-center w-full justify-between p-3 border-b-[3px] border-[#78C552] sticky top-0"
      )}
    >
      <span className="flex gap-3">
        <p className="text-xl">완료</p>
        <Badge variant="outline">2</Badge>
      </span>
      <p className="text-xl">...</p>
    </div>
  );
}

export default CompletedHeader;
