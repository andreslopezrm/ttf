import { Category } from "@prisma/client"
import { Link } from "@remix-run/react";
import { getGradientColor } from "~/utils/gradient";

type Props = {
    categories: Category[];
}

export function CategoryExplorer({ categories }: Props) {
    return (
        <section className="my-8">
            <h4 className="font-bold text-2xl mb-8">Explorer categories</h4>
            <ul className="md:grid grid-cols-3 gap-8">
                { categories.map(({ id, name, slug }, index) => (
                    <li key={id}>
                        <Link to={`/category/${slug}`} className={`text-white text-xl font-semibold py-16 flex justify-center items-center mb-8 rounded md:mb-0 md:text-2xl ${getGradientColor(index)}`}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}