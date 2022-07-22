import { Category } from "@prisma/client"

type Props = {
    categories: Category[]
}

export function CategoryExplorer({ categories }: Props) {
    return (
        <section className="mt-8">
            <h4 className="font-bold text-xl">Explorer categories</h4>
            <ul>
                { categories.map(({ id, name }) => (
                    <li key={id}>
                        {name}
                    </li>
                ))}
            </ul>
        </section>
    );
}