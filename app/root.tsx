import { cssBundleHref } from "@remix-run/css-bundle";
import type {
  LinksFunction,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import Header from "./components/Header";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";
export const loader: LoaderFunction = (args) => rootAuthLoader(args);
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Remix Todo App" },
    { name: "description", content: "The best way to handle your todos" },
  ];
};
export const CatchBoundary = ClerkCatchBoundary();
function App() {
  return (
    <html
      lang="en"
      className="h-full bg-gradient-to-r from-[#000046] to-[#1CB5E0]"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default ClerkApp(App);
