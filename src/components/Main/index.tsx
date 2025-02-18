"use client";

import useGetTasks from "@/hooks/useGetTasks";
import Completed from "./Completed";
import Progress from "./Progress";
import Todo from "./Todo";
import { useMemo } from "react";

interface MainProps {
  userId: string;
}

function Main({ userId }: MainProps) {
  const { data } = useGetTasks({ userId }, { enabled: !!userId });

  const todos = useMemo(() => {
    return data?.filter((d) => d.category === "TODO") ?? [];
  }, [data]);
  const progresses = useMemo(() => {
    return data?.filter((d) => d.category === "PROGRESS") ?? [];
  }, [data]);
  const completeds = useMemo(() => {
    return data?.filter((d) => d.category === "COMPLETED") ?? [];
  }, [data]);

  return (
    <section className="bg-white rounded-2xl mt-10 h-[90%] w-[1200px] bg-opacity-80 overflow-y-hidden">
      <div className="overflow-y-auto m-3 h-[calc(100%-12px-12px)] px-2">
        <h1>Admin님의 프로젝트</h1>

        <div className="flex justify-between gap-2">
          <Todo todos={todos} />
          <Progress progresses={progresses} />
          <Completed completeds={completeds} />
        </div>
      </div>
    </section>
  );
}

export default Main;
