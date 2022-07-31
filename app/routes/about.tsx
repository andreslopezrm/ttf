export default function NotFound() {
    return (
        <div className="container m-0 mx-auto text-slate-700 font-light">
            <div className="px-8">
                <h1 className="mt-12 text-3xl mb-8 font-extrabold">About</h1>

                <p>Ten True Or False is an open source platform to create short quizzes with only 10 questions and only true or false answers, to be shared and solved by the community.</p>

                <h2 className="mt-4 text-2xl mb-2 font-bold">Inspiration</h2>
                <p>The idea is inspired by the technical evaluation platforms that currently exist in the market and combined with the simplicity and challenge that puzzle games provide.</p>

                <h2 className="mt-4 text-2xl mb-2 font-bold">Made for</h2>
                This project is made specifically for the <a target="_blank" href="https://townhall.hashnode.com/planetscale-hackathon" className="underline">PlanetScale X Hashnode Hackathon</a>

                <h2 className="mt-4 text-2xl mb-2 font-bold">Tech Stack</h2>
                <ol className="list-decimal ml-4">
                    <li> <a className="underline" target="_blank" href="https://remix.run/">Remix </a>— The web framewok</li>
                    <li> <a className="underline" target="_blank" href="https://vercel.com/">Vercel </a>— For deploy</li>
                    <li> <a className="underline" target="_blank" href="https://planetscale.com/">PlanetScale </a>— The database platform</li>
                    <li> <a className="underline" target="_blank" href="https://clerk.dev/">Clerk </a>- For the Auth</li>
                    <li> <a className="underline" target="_blank" href="https://tailwindcss.com/">Tailwind </a>— The css framework</li>
                    <li> <a className="underline" target="_blank" href="https://www.prisma.io/">Prisma </a>— ORM</li>
                    <li> <a className="underline" target="_blank" href="https://www.typescriptlang.org/">TypeScript </a>— The language</li>
                </ol>
            </div>
        </div>
    );
}