import { Category, Task } from "@prisma/client";

export default interface Todos extends Task {
  category: Category;
}
