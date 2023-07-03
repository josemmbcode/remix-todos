import React from "react";
import Button from "./Button";
import { Form } from "@remix-run/react";

export default function AddTaskForm() {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <Form method="POST">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              What's your task?
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your task here"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div>
            <Button type="submit" text="Add"></Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
