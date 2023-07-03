import {
  Form,
  Link,
  useLoaderData,
  useSearchParams,
  useSubmit,
} from "@remix-run/react";
import TodoItem from "./TodoItem";
import { ORDER_OPTIONS } from "~/types/orderby";
import type { loader } from "~/routes/todos/route";
import { AiOutlinePlusCircle } from "react-icons/ai";
export default function TodoList() {
  const { todos } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium">Tasks list</h1>
        </div>
        <Link to={"/todos/new"}>
          <AiOutlinePlusCircle className="text-2xl text-green-400" />
        </Link>
      </div>
      <p className="text-slate-500">Hello, here are your latest tasks</p>
      <div className="lg:max-w-sm mt-4">
        <p className="text-slate-600 p-1">Order by:</p>
        <Form
          method="get"
          onChange={(e) => {
            submit(e.currentTarget);
          }}
        >
          <select
            name="orderBy"
            defaultValue={searchParams.get("orderBy") || "name-asc"}
            className="p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            {ORDER_OPTIONS.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Form>
      </div>
      <div id="tasks" className="my-5">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            content={todo.name}
            isCompleted={todo.completed}
            id={todo.id}
          />
        ))}
      </div>
    </div>
  );
}
