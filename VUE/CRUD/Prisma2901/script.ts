import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


type AuthorDTO = {
    firstName: string,
    lastName: string
}

type AddBookDTO = {
    title: string,
    isFiction: boolean,
    datePublished: Date,
}

//pode adicionar no BookDTO o authorID: Number e mudar no connect para $book.authorID ...e retirar no parametro o $authorID : number)

async function AddNewAuthor($authorDTO: AuthorDTO) {
    const author = await prisma.author.create({
        data: $authorDTO
    })
    console.log(author)
}



let autor1: AuthorDTO = {
    firstName: 'Ligia',
    lastName: 'Labravanel'
}

let autor2: AuthorDTO = {
    firstName: 'Serei',
    lastName: 'Apagado'
}

// AddNewAuthor(autor1)

// AddNewAuthor(autor2)


// funcao para mostrar todos os Autores... GET
async function getAllAuthor() {
    const authors = await prisma.author.findMany()
    console.log(authors)
}
// getAllAuthor()

// funcao para buscar o Autor pelo ID
async function getAuthorID(id: number) {
    const authorID = await prisma.author.findUnique({
        where: {
            id: id
        }
    })
    if (authorID == null) {
        console.log('Autor não encontrado')
    } else {
        console.log(authorID)
    }

}
// para retornar o Autor do id 1, que existe

// getAuthorID(1)

// para retornar o Autor do id 2, que não existe

getAuthorID(2)



async function deleteAuthor(id: number) {
    const author = await prisma.author.delete({
        where: {
            id: id
        }
    })
    if (author == null) {
        console.log('Autor não encontrado')
    } else {
        console.log('Autor deletado com sucesso')
    }
}

async function updateAuthor(id: number, authorDTO: AuthorDTO) {
    const author = await prisma.author.update({
        where: {
            id: id
        },
        data: authorDTO
    })
    if (author == null) {
        console.log('Autor não encontrado')
    } else {
        console.log('Autor atualizado com sucesso: ' + (author))
    }

}

async function addNewBook($book: AddBookDTO, $authorID: number) {
    const book = await prisma.book.create({
        data: {
            title: $book.title,
            isFiction: $book.isFiction,
            datePublished: $book.datePublished,
            author: {
                connect: {
                    id: $authorID
                }
            }
        }
    })
    console.log(book)
}


// Criar o livro...

// let livro1 = {
//     title: 'Senhor dos Colares',
//     isFiction: true,
//     datePublished: new Date(),
// }


// Para criar o Livro....

// addNewBook(livro1, 1)


async function getBookID(id: number) {
    const BookID = await prisma.book.findUnique({
        where: {
            id: id
        },
        include: {
            author: {}
        }
    })
    if (BookID == null) {
        console.log('Livro não encontrado')
    } else {
        console.log(BookID)
    }
}

getBookID(2)





async function main() {
    // ... you will write your Prisma Client queries here
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