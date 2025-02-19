import getTask from "@/serverActions/getTask";
import { Task } from "@prisma/client";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export default function useGetTask(
  params: { taskId: string },
  options?: Omit<UseQueryOptions<Task>, "queryKey">
) {
  const result = useQuery<Task>({
    queryKey: ["task", params.taskId],
    queryFn: () => getTask(params.taskId),
    ...options,
  });

  return {
    ...result,
    data: result.data,
  };
}
