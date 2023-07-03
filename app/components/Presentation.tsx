import React from "react";
import Button from "./Button";
import { Link } from "@remix-run/react";
export default function Presentation() {
  return (
    <section className="my-8">
      <div className="py-6 px-4 mx-auto max-w-screen-xl lg:py-12 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
            A better way to handle your pending tasks
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            All in one place.
          </p>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-2 sm:space-x-4">
            <Link
              to="/todos"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
