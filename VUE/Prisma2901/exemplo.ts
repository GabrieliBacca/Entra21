import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

type AuthorDTO = {
    firsName: string,
    lastName: string
}

async function AddNewAuthor($authorDTO: AuthorDTO) {
    const author = await prisma.author.create({
        data: $authorDTO
    })
    console.log(author)
}

// let autor1: AuthorDTO = {
//     firsName: 'Ligia',
//     lastName: 'Labravanel'
// }
// AddNewAuthor(autor1)

async function getAuthors() {
    const authors = await prisma.author.findMany()
    console.log(authors)
}

async function getAuthorById(id: number) {
    const author = await prisma.author.findUnique({
        where: {
            id: id
        }
    })
    if (author == null) {
        console.log('Autor nao encontrado')
    } else {
        console.log(author)
    }
}

async function deleteAuthor(id: number) {
    const author = await prisma.author.delete({
        where: {
            id: id
        }
    })
    if (author == null) {
        console.log('Autor nao encontrado')
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
        console.log('Autor nao encontrado')
    } else {
        console.log('Autor atualizado com sucesso: ' + (author))
    }
}

type AddBookDto = {
    title: string,
    isFiction: boolean
    datePublished: Date,
}
async function addNewBook($book: AddBookDto, $authorId: number) {
    const book = await prisma.book.create({
        data: {
            title: $book.title,
            isFiction: $book.isFiction,
            datePublished: $book.datePublished,
            author: {
                connect: {
                    id: $authorId
                }
            }
        }
    })
}
let livro: AddBookDto = {
    title: 'Senhor dos Colares',
    isFiction: true,
    datePublished: new Date(),
}

addNewBook(livro, 1)


async function getBookById(id: number) {
    const book = await prisma.book.findUnique({
        where: {
            id: id
        },
        include: {
            author: {}
        }
    })
    // const bookDto = {
    //     title: book?.title,
    //     author: {
    //         authorId: book?.authorId,
    //         firstName: book?.author.firsName,
    //         lastName: book?.author.lastName,
    //     }
    // }
    console.log(book)
}
getBookById(1);