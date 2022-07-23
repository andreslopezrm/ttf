const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const data = {
    categories: [ 
        {name: "Frontend", slug: "frontend"},
        {name: "Backend", slug: "backend"},
        {name: "Devops", slug: "devops"},
        {name: "Database", slug: "database"},
        {name: "Movil", slug: "movil"},
        {name: "IoT", slug: "iot"},
        {name: "Algorithms", slug: "algorithms"},
        {name: "Design", slug: "design"},
        {name: "Other", slug: "other"},
    ]
};

const load = async () => {
    

    await prisma.category.deleteMany();
    await prisma.category.createMany({
        data: data.categories
    });
}

load();