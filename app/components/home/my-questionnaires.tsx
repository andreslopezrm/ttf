import { Link } from "@remix-run/react";

export function MyQuestionnaires() {
    return (
        <div className="flex justify-end gap-3">
            <Link to="/questionnaire/owner" className="text-slate-800 underline hover:opacity-80">
                My Quizzes
            </Link>
            <span>|</span>
            <Link to="/questionnaire/resolved/" className="text-slate-800 underline hover:opacity-80">
                Resolved
            </Link>
        </div>
    );
}