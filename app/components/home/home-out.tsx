export function HomeOut() {
    return (
        <>
            <section className="mt-32 md:mt-52">
                <div className="container m-0 mx-auto p-8 md:p-16">
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
                </div>
            </section>
        </>
    );
}