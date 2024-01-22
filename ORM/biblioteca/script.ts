import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // const gender = await prisma.gender.create({
    //     data : {
    //         name: 'Comedia'
    //     }  
    // })
    console.log(await prisma.$queryRaw`SELECT * FROM gender`);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })