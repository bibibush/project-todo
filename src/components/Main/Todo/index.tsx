import Task from "@/components/Task";
import TodoHeader from "./TodoHeader";
import Todos from "@/types/Todos";
import { useState } from "react";

interface TodoProps {
  todos: Todos[];
  refetch: () => void;
}

function Todo({ todos, refetch }: TodoProps) {
  const [isAsc, setAsc] = useState<boolean>(true);

  const handleSetAsc = () => {
    setAsc(!isAsc);
  };

  const sortedTodos = isAsc
    ? todos.sort((a, b) => a.expireDate.getTime() - b.expireDate.getTime())
    : todos.sort((a, b) => b.expireDate.getTime() - a.expireDate.getTime());

  return (
    <div className="flex flex-col w-[350px] items-center gap-3 min-h-full">
      <TodoHeader count={todos.length} isAsc={isAsc} setAsc={handleSetAsc} />

      {!!todos.length &&
        sortedTodos.map((todo) => (
          <Task
            category={todo.category}
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            expireDate={todo.expireDate}
            refetch={refetch}
          />
        ))}
    </div>
  );
}

export default Todo;
