import { Questionnaire } from "@prisma/client";

export type QuestionnaireExtended = Questionnaire & {
    isOwner: boolean;
    isResolved: boolean;
};
