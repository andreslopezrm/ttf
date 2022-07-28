import { Link } from "react-router-dom";
import { QuestionnaireExtended } from "~/types/questionnaire";
import { shareTwitterUrl } from "~/utils/share";

type Props = {
    questionnaire: QuestionnaireExtended;
    baseUrl: string;
};

export function CategoryQuestionnaireItem({ questionnaire, baseUrl } : Props) {
    const { name, id, isOwner, isResolved } = questionnaire;

    const buildAction = () => {
        if(isOwner) {
            return (
                <Link to={`/questionnaire/edit/${id}`} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100">
                    <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        Edit
                    </span>
                </Link>
            );
        }

        if(isResolved) {
            return (
                <Link to={`/questionnaire/view/${id}`} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100">
                    <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        View
                    </span>
                </Link>
            );
        }

        return (
            <Link to={`/questionnaire/resolved/${id}`} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                    Resolve
                </span>
            </Link> 
        );
    }

    return (
        <tr className="bg-white border-b">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                {name}
            </th>
            <td className="py-4 px-6">
                {buildAction()}

                <a href={shareTwitterUrl("I invite you to solve this quizz of only 10 questions", `${baseUrl}/questionnaire/resolved/${id}`)} target="_blank" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-7 py-3.5 text-center mr-4 mb-2 inline-block">
                    Tweet
                </a>
            </td>
        </tr>
    );
}