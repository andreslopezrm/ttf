import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp } from "@clerk/remix";
import { ClerkCatchBoundary } from "@clerk/remix";

import styles from "./styles/app.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/shared/footer";

export const CatchBoundary = ClerkCatchBoundary();

export const loader: LoaderFunction = (args) => rootAuthLoader(args);


export function links() {
  return [{ rel: "stylesheet", href: styles }]
}


export const meta: MetaFunction = () => ({
  "charset": "utf-8",
  "title": "Ten True or False",
  "viewport": "width=device-width,initial-scale=1",
  "og:title": "Ten True or False",
  "og:type": "website",
  "og:image": "https://ttf-psi.vercel.app/img/cover.png",
  "og:image:width": "1280",
  "og:image:height": "720",
  "og:description": "The new age questions for developers",
  "og:site_name": "Ten True or False",
  "twitter:card": "summary",
  "twitter:title": "Ten True or False",
  "twitter:description": "The new age questions for developers",
  "twitter:image": "https://ttf-psi.vercel.app/img/cover.png"
});


function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />

      </head>
      <body className="bg-white text-black">
        <Navbar />
        <main className="mt-20 min-h-screen">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default ClerkApp(App);