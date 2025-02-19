"use client";

import useGetTasks from "@/hooks/useGetTasks";
import Completed from "./Completed";
import Progress from "./Progress";
import Todo from "./Todo";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { signOut } from "next-auth/react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CiSquarePlus } from "react-icons/ci";
import _ from "lodash";
import Link from "next/link";

interface MainProps {
  userId: string;
}

function Main({ userId }: MainProps) {
  const { data, refetch } = useGetTasks({ userId }, { enabled: !!userId });

  const [inputValue, setInputValue] = useState<string>("");

  const changeInputValue = _.debounce((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, 300);

  const todos = useMemo(() => {
    return (
      data
        ?.filter((d) => d.category === "TODO")
        .filter(
          (d) =>
            d.title.includes(inputValue) || d.description?.includes(inputValue)
        ) ?? []
    );
  }, [data, inputValue]);
  const progresses = useMemo(() => {
    return (
      data
        ?.filter((d) => d.category === "PROGRESS")
        .filter(
          (d) =>
            d.title.includes(inputValue) || d.description?.includes(inputValue)
        ) ?? []
    );
  }, [data, inputValue]);
  const completeds = useMemo(() => {
    return (
      data
        ?.filter((d) => d.category === "COMPLETED")
        .filter(
          (d) =>
            d.title.includes(inputValue) || d.description?.includes(inputValue)
        ) ?? []
    );
  }, [data, inputValue]);

  useEffect(() => {
    if (!userId) {
      signOut({ redirect: true, redirectTo: "/" });
    }
  }, [userId]);

  return (
    <section className="bg-white rounded-2xl mt-10 h-[90%] w-[1200px] bg-opacity-80 overflow-y-hidden">
      <div className="overflow-y-auto m-3 h-[calc(100%-12px-12px)] px-2">
        <div className="flex items-center gap-5">
          <h1>Admin님의 프로젝트</h1>

          <div className="relative flex items-center justify-between flex-1">
            <Link href="/create">
              <Button
                className="rounded-2xl shadow-black/80 shadow-sm"
                variant="primaryBlue"
              >
                <CiSquarePlus style={{ width: "24px", height: "24px" }} />새
                프로젝트 생성
              </Button>
            </Link>

            <Input
              className="w-[250px] border border-blue-500"
              placeholder="특정 단어를 검색하세요."
              onChange={changeInputValue}
            />
          </div>
        </div>

        <div className="flex justify-between gap-2">
          <Todo todos={todos} refetch={refetch} />
          <Progress progresses={progresses} refetch={refetch} />
          <Completed completeds={completeds} refetch={refetch} />
        </div>
      </div>
    </section>
  );
}

export default Main;
