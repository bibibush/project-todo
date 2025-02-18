import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TodoHeaderProps {
  count: number;
}

function TodoHeader({ count }: TodoHeaderProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-t-md flex items-center justify-between w-full p-3 border-b-[3px] border-[#1E293B] sticky top-0"
      )}
    >
      <span className="flex gap-3">
        <p className="text-xl">TODO</p>
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
              query: { category: "TODO" },
            }}
          >
            <DropdownMenuItem>생성하기</DropdownMenuItem>
          </Link>
          <DropdownMenuItem>날짜 내림차순으로 정렬</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default TodoHeader;
