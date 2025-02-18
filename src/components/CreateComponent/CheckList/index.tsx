import CheckItem from "./CheckItem";

function CheckList() {
  return (
    <div className="flex flex-col mt-16 gap-3 w-[600px]">
      <p className="text-4xl border-b-2 border-gray-500 py-2">체크 리스트</p>
      <div className="flex flex-col gap-2">
        <CheckItem />
      </div>
    </div>
  );
}

export default CheckList;
