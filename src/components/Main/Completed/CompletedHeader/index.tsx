import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CompletedHeaderProps {
  count: number;
  isAsc: boolean;
  setAsc: () => void;
}

function CompletedHeader({ count, isAsc, setAsc }: CompletedHeaderProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-t-md flex items-center w-full justify-between p-3 border-b-[3px] border-[#78C552] sticky top-0",
        "shadow-sm shadow-black/70"
      )}
    >
      <span className="flex gap-3">
        <p className="text-xl">완료</p>
        <Badge variant="outline">{count}</Badge>
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <p className="text-xl">...</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link
            href={{
              pathname: "/create",
              query: {
                category: "COMPLETED",
              },
            }}
          >
            <DropdownMenuItem>생성하기</DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={setAsc}>
            {isAsc ? "날짜 내림차순으로 정렬" : "날짜 오름차순으로 정렬"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default CompletedHeader;
