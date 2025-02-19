import ErrorResponse from "@/types/ErrorResponse";

export const error: ErrorResponse = Object.assign(new Error("unauthorized"), {
  status: 401,
  statusText: "unauthorized",
});
