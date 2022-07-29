import { Wave } from "../shared/wave";

export function HomeOut() {
    return (
        <>
            <section className="container m-0 mx-auto p-8 md:p-8">
                <h1 className="text-6xl text-zinc-900 font-extrabold md:text-8xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Ten True or False</span> the new age questions for developers</h1>
                <p className="mt-8 text-2xl text-gray-600 font-extralight md:text-3xl md:w-9/12 md:mt-12">Create easily and simply questionnaires that help other developers to improve their knowledge and share your results with others</p>
                <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row md:justify-start md:w-9/12">

                    <div className="flex gap-4 md:flex-col">
                        <img src="/img/short.png" alt="ten questions" width="70"/>
                        <div className="mt-2">
                            <h4 className="text-lg">Short Questionnaires</h4>
                            <p className="text-gray-500 font-light">Just in ten questions test your knowledge</p>
                        </div>
                    </div>

                    <div className="flex gap-4 md:flex-col">
                        <img src="/img/sharew.png" alt="ten questions" width="70" />
                        <div className="mt-2">
                            <h4 className="text-lg">Share with the world</h4>
                            <p className="text-gray-500 font-light">Questionnaires that other programmers take can solve them</p>
                        </div>
                    </div>

                    <div className="flex gap-4 md:flex-col">
                        <img src="/img/day.png" alt="ten questions" width="70" />
                        <div className="mt-2">
                            <h4 className="text-lg">Stay up to date</h4>
                            <p className="text-gray-500 font-light">Continuously find new quizzes that improve your level</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex gap-4">
                    <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:px-12 md:py-5">Get starter</button>
                    <button type="button" className="text-black hover:text-zinc-800 border border-black hover:bg-zinc-50 focus:ring-4 focus:outline-none focus:ring-zinc-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:px-12 md:py-5">About us</button>
                </div>
            </section>
            <section>
                <Wave />
                <div className="bg-gray-100">
                    <div className="container m-0 mx-auto p-8 md:p-8">
                        <h2 className="text-2xl md:text-5xl font-extrabold mb-8 md:mb-0">Only 10 questions</h2>
                        <div className="md:flex md:gap-4">
                            <figure className="flex-1 md:p-8 mb-4 md:mb-0">
                                <img src="/img/categories.png" alt="categories" className="max-w-full border-white border-solid border-8" />
                            </figure>
                            <div className="flex-1 md:p-8 font-extralight text-xl">
                                <p className="mb-4">With a few minutes a day solving only 10 questions per quiz raise your level as a programmer.</p>
                                <p>Challenge your knowledge with quizzes in different categories, fronted, backed, devops, mobile and many more.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Wave type="invert" />
            </section>
            <section>
                <h2>Perfect Score!</h2>
            </section>
        </>
    );
}