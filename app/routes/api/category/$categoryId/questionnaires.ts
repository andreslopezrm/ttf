import { LoaderFunction } from "@remix-run/node";
import { PER_PAGE_CATEGORY_QUESTIONNAIRES } from "~/utils/constants";
import { db } from "~/utils/db.server";
import { getQueryIntParameter } from "~/utils/params.server";

export const loader: LoaderFunction = async ({ request, params }) => {
    const { categoryId } = params;

    const take = getQueryIntParameter(request, "per_page", PER_PAGE_CATEGORY_QUESTIONNAIRES); 
    const skip = getQueryIntParameter(request, "offset", 0);

    const questionnaires = await db.questionnaire.findMany({
        skip,
        take,
        where: {
            categoryId,
            active: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });    

    return { questionnaires };
}