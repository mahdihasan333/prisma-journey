import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.user.create({
  //     data: {
  //         name: "abdullah",
  //         email: "abdullah@gmail.com"
  //     }
  // })
  // console.log(result);

  // get all user data
  const userData = await prisma.user.findMany();
  console.log(userData);

  // get user data by condition
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

  // const findUserById = await prisma.user.findUniqueOrThrow({
  //     where: {
  //         id: 5
  //     }
  // });
  // console.log(findUserById);

  // update user data
  //   const updateUser = await prisma.user.update({
  //     where: {
  //       id: 3,
  //     },
  //     data: {
  //       name: "shihab hossain",
  //       email: "shihab.hossain@gmail.com",
  //     },
  //   });
  //   console.log(updateUser);

  // update multiple user data
  const updateProfilePhoto = await prisma.user.updateMany({
    where: {
      profilePhoto: null,
    },
    data: {
      profilePhoto: "https://i.ibb.co/2kR0j5H/profile-photo.png",
    },
  });

  console.log(updateProfilePhoto);
}

main();
