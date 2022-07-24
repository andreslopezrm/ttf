import { Questionnaire } from "@prisma/client";
import { Link } from "react-router-dom";

type Props = {
    questionnaire: Questionnaire;
    userId: string | null;
};

export function CategoryQuestionnaireItem({ questionnaire, userId } : Props) {
    const { name, userId: questionnaireUserId } = questionnaire;
    const idOwnerQuestionnaire = userId && (userId === questionnaireUserId);
    return (
        <tr className="bg-white border-b">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                {name}
            </th>
            <td className="py-4 px-6">
                {
                    idOwnerQuestionnaire 
                    ?  <Link to="/" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                Edit
                            </span>
                        </Link>
                    : <Link to="/" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                Resolve
                            </span>
                        </Link> 
                }
            </td>
        </tr>
    );
}