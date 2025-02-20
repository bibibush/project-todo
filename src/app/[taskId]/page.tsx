// import { auth } from "@/auth";
import CreateComponent from "@/components/CreateComponent";
// import { prisma } from "@/lib/prisma";
import getTask from "@/serverActions/getTask";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
// import { redirect } from "next/navigation";

async function TaskId({ params }: { params: Promise<{ taskId: string }> }) {
  // const session = await auth();
  // if (!session) {
  //   redirect("/");
  // }

  const taskId = (await params).taskId;
  // const task = await prisma.task.findUnique({
  //   where: {
  //     id: taskId,
  //   },
  // });
  // if (!task) {
  //   redirect("/");
  // }

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
