import { Category, Task } from "@prisma/client";

export default interface Completeds extends Task {
  category: Category;
}
