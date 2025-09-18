import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
    const result = await prisma.user.create({
        data: {
            name: "abdullah",
            email: "abdullah@gmail.com"
        }
    })

    console.log(result);
}

main()