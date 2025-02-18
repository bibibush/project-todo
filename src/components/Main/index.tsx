import Completed from "./Completed";
import Progress from "./Progress";
import Todo from "./Todo";

function Main() {
  return (
    <section
      id="main"
      className="bg-white rounded-2xl mt-10 h-[90%] w-[1200px] bg-opacity-80 overflow-y-hidden"
    >
      <div className="overflow-y-auto m-3 h-[calc(100%-12px-12px)] px-2">
        <h1>Admin님의 프로젝트</h1>

        <div className="flex justify-between gap-2">
          <Todo />
          <Progress />
          <Completed />
        </div>
      </div>
    </section>
  );
}

export default Main;
