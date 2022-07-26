import { Questionnaire } from "@prisma/client";
import { QuestionnaireExtended } from "~/types/questionnaire";

export function generateQuestionnairesExt(questionnaires: Questionnaire[], userId: string | null, resolved: string[]): QuestionnaireExtended[] {
    return questionnaires.map(item => {
        const isOwner = userId === item.userId;
        const isResolved = resolved.includes(item.id); 
        return {...item, isOwner, isResolved};
    });
}