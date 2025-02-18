import Task from "@/components/Task";
import TodoHeader from "./TodoHeader";

function Todo() {
  return (
    <div className="flex flex-col w-[350px] items-center gap-3">
      <TodoHeader />

      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
}

export default Todo;
