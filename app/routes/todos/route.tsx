import { ClerkCatchBoundary } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import {
  DataFunctionArgs,
  LoaderFunction,
  json,
  redirect,
} from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { z } from "zod";
import TodoList from "~/components/TodoList";
import { deleteTodo, getTodosByUser, updateTodo } from "~/models/todos";

export async function loader(args: DataFunctionArgs) {
  const { userId } = await getAuth(args);

  if (!userId) {
    throw redirect("/login");
  }
  const url = new URL(args.request.url);
  const order = url.searchParams.get("orderBy") || "name-asc";
  const todos = await getTodosByUser({ id: userId, order });
  return json({ todos });
}

export const CatchBoundary = ClerkCatchBoundary();
export async function action({ request }: DataFunctionArgs) {
  const form = await request.formData();
  if (request.method === "DELETE") {
    const id = form.get("id");
    const schema = z.object({
      id: z.number(),
    });
    const payload = schema.parse({ id: Number(id) });
    await deleteTodo(payload.id);
    return {};
  }
  if (request.method === "PATCH") {
    const isCompleted = form.get("isCompleted");
    const id = form.get("id");
    const schema = z.object({
      isCompleted: z.boolean(),
      id: z.number(),
    });
    const payload = schema.parse({
      id: Number(id),
      isCompleted: isCompleted === "false" ? false : true,
    });
    await updateTodo(payload);
    return {};
  }
}
export default function route() {
  return (
    <>
      <TodoList />
      <Outlet />
    </>
  );
}
