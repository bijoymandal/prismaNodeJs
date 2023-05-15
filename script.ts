import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    //database create user records
    // const user = await prisma.user.create({ data: { name: "user", email: "user@gmail.com", age: 24, is_active: true } })
    /*const usermany = await prisma.user.createMany({
        data: [
            {
                name: "user2",
                age: 22,
                email: "user2@gmail.com",
                is_active: true,
                is_admin: false,
                role: "BASIC"
            },
            {
                name: "user3",
                age: 28,
                email: "user3@gmail.com",
                is_active: true,
            },
            {
                name: "user4",
                age: 26,
                email: "user5@gmail.com",
                is_active: true
            },
            {
                name: "user4",
                age: 23,
                email: "user22@gmail.com",
                is_active: true
            }

        ]
    })*/
    /*const findUser = await prisma.user.findMany({
        where: {
            // email: "user2@gmail.com",
            // age_name: {
            //     age: 22,
            //     name: "user3"
            // }
            //user name and age match in where condition are result show in console
            name: "user4",
            // age: {
            //     gt: 22
            // },
            // email: {
            //     // contains: "gmail.com",
            //     // startsWith: "user"
            //     endsWith: "@gmail.com"
            // }
        },
        //distinct: ["name", "age"]
        //pagination
        orderBy: {
            age: "asc"
        },
        take: 2,
        skip: 1
    })*/

    const updateUser = await prisma.user.update({
        where: {
            email: "user2@gmail.com"
        },
        data: {
            // email: "user2@gmail.com"
            age: {
                increment: 2
            }
        }
    })

    // const deleteMany = await prisma.user.deleteMany();

    console.log(updateUser);
}
main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })