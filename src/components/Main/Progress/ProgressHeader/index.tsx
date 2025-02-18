import { Badge } from "@/components/ui/badge";

function ProgressHeader() {
  return (
    <div className="flex items-center w-full justify-between p-3 border-b-[3px] border-[#306BFF]">
      <span className="flex gap-3">
        <p className="text-xl">진행중</p>
        <Badge variant="outline">3</Badge>
      </span>
      <p className="text-xl">...</p>
    </div>
  );
}

export default ProgressHeader;
