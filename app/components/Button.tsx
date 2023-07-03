import React from "react";

type ButtonProps = {
  text: string;
  type: string | undefined
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="rounded bg-[#000046] w-full  text-white p-2">
      {text}
    </button>
  );
}
