import { Category } from "@prisma/client";
import { CategoryExplorer } from "../category/explorer";
import { CreateForm } from "./create-form";
import { MyQuestionnaires } from "./my-questionnaires";

type Props = {
    categories: Category[];
}

export function HomeIn({ categories }: Props) {
    return (
        <div className="container m-0 mx-auto">
            <div className="px-8">
                <MyQuestionnaires />
                <CreateForm />
                <CategoryExplorer categories={categories} />
            </div>
        </div>
    );
}