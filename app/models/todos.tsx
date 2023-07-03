import type { Prisma, Todo } from "@prisma/client";
import { db } from "~/utils/db.server";

type getTodosByUserPayload = {
  id: Todo["creatorId"];
  order: string;
};

type updateTodoPayload = {
  isCompleted: boolean;
  id: Todo["id"];
};

type creatTodoPayload = {
  name: string;
  userId: Todo["creatorId"];
};
export async function getTodosByUser({ id, order }: getTodosByUserPayload) {
  const [key, value] = order?.split("-");
  return await db.todo.findMany({
    where: {
      creatorId: id,
    },
    orderBy: {
      [key]: value,
    },
  });
}

export async function deleteTodo(id: number) {
  await db.todo.delete({ where: { id } });
}

export async function updateTodo({ id, isCompleted }: updateTodoPayload) {
  await db.todo.update({
    data: {
      completed: isCompleted,
    },
    where: { id },
  });
}

export async function createTodo({ name, userId }: creatTodoPayload) {
  return db.todo.create({
    data: {
      name,
      creatorId: userId,
    },
  });
}
