const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const data = {
    categories: [ 
        {name: "Frontend"},
        {name: "Backend"},
        {name: "Devops"},
        {name: "Database"},
        {name: "Movil"},
        {name: "IoT"},
        {name: "Algorithms"},
        {name: "Design"},
        {name: "Other"},
    ]
};

const load = async () => {
    

    await prisma.category.deleteMany();
    // await prisma.category.createMany({
    //     data: data.categories
    // });
}

load();