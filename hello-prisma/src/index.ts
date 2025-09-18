import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
    // const result = await prisma.user.create({
    //     data: {
    //         name: "abdullah",
    //         email: "abdullah@gmail.com"
    //     }
    // })

    // console.log(result);



    // const userData = await prisma.user.findMany({
    //     where: {
    //         id: 3
    //     }
    // });
    // console.log(userData);


    // const findUserById = await prisma.user.findUnique({
    //     where: {
    //         id: 2
    //     }
    // });
    // console.log(findUserById);



    const findUserById = await prisma.user.findUniqueOrThrow({
        where: {
            id: 5
        }
    });
    console.log(findUserById);
}

main()