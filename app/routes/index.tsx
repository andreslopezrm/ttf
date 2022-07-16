import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="container mx-auto">
      <h1 className="text-8xl mt-52 text-zinc-900 font-extrabold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Ten True or False</span> the new age questions for developers</h1>
      <br />
      <hr />
      <Link to="uno">
        Uno
      </Link>
    </div>
  );
}
