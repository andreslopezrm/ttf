import { LoaderFunction } from "@remix-run/node";
import { PER_PAGE_CATEGORY_QUESTIONNAIRES } from "~/utils/constants";
import { db } from "~/utils/db.server";
import { getQueryIntParameter, getQueryStringParameter } from "~/utils/params.server";

type FilterData = {
    active: boolean;
    categoryId?: string;
    name?: {
        contains: string
    }
}

export const loader: LoaderFunction = async ({ request }) => {

    const take = getQueryIntParameter(request, "per_page", PER_PAGE_CATEGORY_QUESTIONNAIRES); 
    const skip = getQueryIntParameter(request, "offset", 0);
    const search = getQueryStringParameter(request, "search");
    const categoryId = getQueryStringParameter(request, "category_id");

    const filter: FilterData = {
        active: true
    };

    if(categoryId) {
        filter.categoryId = categoryId;
    }

    if(search) {
        filter.name = {
            contains: search
        }
    }

    const totalQuery = db.questionnaire.count({
        where: {
            ...filter
        }
    });

    const questionnairesQuery = db.questionnaire.findMany({
        skip,
        take,
        where: {
            ...filter
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    const [total, questionnaires] = await Promise.all([ totalQuery, questionnairesQuery ]);

    return { take, skip, search, total, questionnaires };
}