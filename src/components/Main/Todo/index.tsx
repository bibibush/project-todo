import Task from "@/components/Task";
import TodoHeader from "./TodoHeader";
import Todos from "@/types/Todos";

interface TodoProps {
  todos: Todos[];
}

function Todo({ todos }: TodoProps) {
  return (
    <div className="flex flex-col w-[350px] items-center gap-3 min-h-full">
      <TodoHeader count={todos.length} />

      {!!todos.length &&
        todos.map((todo) => (
          <Task
            key={todo.id}
            title={todo.title}
            description={todo.description}
            expireDate={todo.expireDate}
          />
        ))}
    </div>
  );
}

export default Todo;
