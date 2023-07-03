import Modal from "~/components/Modal";
import { useNavigate } from "@remix-run/react";
import AddTaskForm from "~/components/AddTaskForm";
import { ActionArgs, redirect } from "@remix-run/node";
import { createTodo } from "~/models/todos";
import { z } from "zod";
import { getAuth } from "@clerk/remix/ssr.server";
import { ClerkCatchBoundary } from "@clerk/remix";
export async function action(args: ActionArgs) {
  const form = await args.request.formData();
  const name = form.get("name");
  const { userId } = await getAuth(args);
  const schema = z.object({
    name: z.string().nonempty(),
    userId: z.string().nonempty(),
  });

  const payload = schema.parse({ name, userId });

  await createTodo(payload);
  return redirect("/todos");
}
export default function route() {
  const navigate = useNavigate();

  function onClose() {
    navigate("/todos");
  }
  return (
    <Modal onClose={onClose}>
      <AddTaskForm />
    </Modal>
  );
}

export const CatchBoundary = ClerkCatchBoundary();