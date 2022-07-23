import { Questionnaire } from "@prisma/client";

type Props = {
    questionnaire: Questionnaire
};

export function CategoryQuestionnaireItem({ questionnaire } : Props) {
    const { name } = questionnaire;
    return (
        <div>
            {name}
        </div>
    );
}