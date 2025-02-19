import CreateComponent from "@/components/CreateComponent";
import getTask from "@/serverActions/getTask";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function TaskId({ params }: { params: Promise<{ taskId: string }> }) {
  const taskId = (await params).taskId;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTask(taskId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="bg-white rounded-2xl mt-10 h-[90%] w-[1200px] bg-opacity-80 overflow-y-hidden">
        <div className="overflow-y-auto m-3 h-[calc(100%-12px-12px)] px-2">
          <CreateComponent isModify taskId={taskId} />
        </div>
      </section>
    </HydrationBoundary>
  );
}

export default TaskId;
