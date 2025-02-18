import { Badge } from "@/components/ui/badge";

function CompletedHeader() {
  return (
    <div className="flex items-center w-full justify-between p-3 border-b-[3px] border-[#78C552]">
      <span className="flex gap-3">
        <p className="text-xl">완료</p>
        <Badge variant="outline">2</Badge>
      </span>
      <p className="text-xl">...</p>
    </div>
  );
}

export default CompletedHeader;
