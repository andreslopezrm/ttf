import { SignedIn, SignedOut } from "@clerk/remix";
import { Category } from "@prisma/client";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { HomeIn } from "~/components/home/home-in";
import { HomeOut } from "~/components/home/home-out";
import { db } from "~/utils/db.server";

type LoaderTypeData = {
  categories: Category[]
}

export const loader: LoaderFunction = async () => {
  const categories = await db.category.findMany();
  return { categories }
}

export default function Index() {
  const { categories } = useLoaderData<LoaderTypeData>();
  return (
    <>
      <SignedIn>
        <HomeIn categories={categories} />
      </SignedIn>
      
      <SignedOut>
        <HomeOut />
      </SignedOut>
    </>
  );
}
