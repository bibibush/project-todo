import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function ProgressHeader() {
  return (
    <div
      className={cn(
        "bg-white rounded-t-md flex items-center w-full justify-between p-3 border-b-[3px] border-[#306BFF] sticky top-0"
      )}
    >
      <span className="flex gap-3">
        <p className="text-xl">진행중</p>
        <Badge variant="outline">3</Badge>
      </span>
      <p className="text-xl">...</p>
    </div>
  );
}

export default ProgressHeader;
