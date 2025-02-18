import getTasks from "@/serverActions/getTasks";
import { Task } from "@prisma/client";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export default function useGetTasks(
  params: { userId: string },
  options?: Omit<UseQueryOptions<Task[]>, "queryKey">
) {
  const result = useQuery<Task[]>({
    queryKey: ["task", params.userId],
    queryFn: getTasks,
    ...options,
  });

  return {
    ...result,
    data: result.data,
  };
}
