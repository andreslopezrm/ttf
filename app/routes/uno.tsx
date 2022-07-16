import { Questionnaire } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";


export const loader: LoaderFunction = async () => {
    const data = await db.questionnaire.findMany();
    return json(data);
}

export default function Index() {

    const data = useLoaderData<Questionnaire[]>();

    return (
      <div>
        <h2>Ejemplo</h2>
        <p>Total: { data.length }</p>
        <ul>
            {data.map((q, index) => <li key={index}>{q.name}</li>)}
        </ul>
      </div>
    );
  }
  