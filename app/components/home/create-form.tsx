import { useNavigate } from "@remix-run/react";
import { useState, useEffect } from "react";
import type { FormEvent, InputEvent } from "~/types/event";

export function CreateForm() {

    const [name, setName] = useState('');
    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(`/questionnaire/create?questionnarie=${name}`);
    }, [name]);

    const navigate = useNavigate();

    const handleOnChangeName = (event: InputEvent) => setName(event.target.value);

    const handleOnCreate = (event: FormEvent) => {
        event.preventDefault();
        navigate(path);
    }

    return (
        <section>
            <p className="text-3xl font-extrabold">Create a new quiz easily</p>
            <form onSubmit={handleOnCreate} className="mb-4 mt-4 flex gap-4 items-center">
                <input value={name} onChange={handleOnChangeName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="name of quiz" />
                <button type="submit" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-2 mb-2">Create</button>
            </form>
        </section>
    );
}