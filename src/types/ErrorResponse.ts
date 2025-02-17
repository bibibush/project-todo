export default interface ErrorResponse extends Error {
  status: number;
  statusText: string;
}
