import { Category, Task } from "@prisma/client";

export default interface Progresses extends Task {
  category: Category;
}
