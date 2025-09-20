import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function others() {
    // create some user data / insert some user data
    // const insertUsers = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "mahdi",
    //             email: "mahdi@example.com"
    //         },
    //         {
    //             name: "hassan",
    //             email: "hassan@example.com"
    //         },
    //         {
    //             name: "rafi",
    //             email: "rafi@example.com"
    //         },
    //     ]
    // })
    // console.log(insertUsers);

    // retrieve all data
    const users = await prisma.user.findMany({
        where:{
            name: {
                contains: 'ma',     // case sensitive
                mode: 'insensitive' // case insensitive
            }
        },
        orderBy:{
            name: 'asc'
        }
    });
    console.log(users);
}

others();