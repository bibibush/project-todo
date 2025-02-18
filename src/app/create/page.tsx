import { auth } from "@/auth";
import CreateComponent from "@/components/CreateComponent";
import { redirect } from "next/navigation";

async function CreatePage() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return (
    <section className="bg-white rounded-2xl mt-10 h-[90%] w-[1200px] bg-opacity-80 overflow-y-hidden">
      <div className="overflow-y-auto m-3 h-[calc(100%-12px-12px)] px-2">
        <CreateComponent />
      </div>
    </section>
  );
}

export default CreatePage;
