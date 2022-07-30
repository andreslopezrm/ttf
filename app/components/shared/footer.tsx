export function Footer() {
    return(
        <footer className="p-8 flex flex-col gap-2 text-center mb-8 md:mb-0 md:flex-row md:justify-between md:text-start">
            <span className="text-slate-600 font-light">{'\u00a9'} 2022</span>
            <span className="font-semibold">
                Built for <a href="https://hashnode.com/" target="_blank" className="text-pink-600 underline">PlanetScale</a> X <a href="https://planetscale.com/" target="_blank" className="text-purple-700 underline">Hashnode</a> <a href="https://townhall.hashnode.com/planetscale-hackathon" target="_blank" className="text-indigo-700 underline">Hackathon</a>
            </span>
            <span className="flex gap-3 justify-center">
                <a href="https://twitter.com/andres_lopez_rm" target="_blank" className="hover:opacity-80">
                    <img src="/img/twitter.png" alt="twitter" width="24" />
                </a>
                <a href="https://github.com/andreslopezrm/ttf" target="_blank" className="hover:opacity-80">
                    <img src="/img/github.png" alt="github" width="24" />
                </a>
            </span>
        </footer>
    );
}