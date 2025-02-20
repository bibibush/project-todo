import { auth } from "@/auth";
import Main from "@/components/Main";
import getTasks from "@/serverActions/getTasks";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function HomePage() {
  const queryClient = new QueryClient();
  const session = await auth();

  const userId = session?.user?.id ?? "";
  const userName = session?.user?.name ?? "";

  await queryClient.prefetchQuery({
    queryKey: ["tasks", userId],
    queryFn: getTasks,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main userId={userId} userName={userName} />
    </HydrationBoundary>
  );
}
