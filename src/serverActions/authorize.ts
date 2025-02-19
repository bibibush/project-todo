"use server";

import { auth } from "@/auth";

export default async function authorize(): Promise<string | null> {
  const session = await auth();
  if (!session) {
    return null;
  }

  const userId = session.user?.id;
  if (!userId) {
    return null;
  }

  return userId;
}
