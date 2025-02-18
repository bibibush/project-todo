import Completed from "./Completed";
import Progress from "./Progress";
import Todo from "./Todo";

function Main() {
  return (
    <section className="bg-white rounded-2xl mt-10 h-[90%] w-[1200px] bg-opacity-80 p-3 overflow-auto">
      <h1>Admin님의 프로젝트</h1>

      <div className="flex justify-between gap-2">
        <Todo />
        <Progress />
        <Completed />
      </div>
    </section>
  );
}

export default Main;
