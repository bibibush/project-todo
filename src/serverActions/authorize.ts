"use server";

import { auth, signOut } from "@/auth";
import ErrorResponse from "@/types/ErrorResponse";

export default async function authorize(): Promise<string> {
  const error: ErrorResponse = Object.assign(new Error("unauthorized"), {
    status: 401,
    statusText: "unauthorized",
  });

  const session = await auth();
  if (!session) {
    await signOut();
    return Promise.reject(error);
  }

  const userId = session.user?.id;
  if (!userId) {
    await signOut();
    return Promise.reject(error);
  }

  return userId;
}
