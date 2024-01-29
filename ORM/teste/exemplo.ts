import { PrismaClient } from '@prisma/client'
import { get } from 'http'

const prisma = new PrismaClient()

type AuthorDTO = {
    firstName: string,
    lastName: string
}

async function AddNewAuthor(authorDTO: AuthorDTO) {
    const author = await prisma.author.create({
        data: authorDTO
    })
    console.log(author)
}

// let author1: AuthorDTO = {
//     firstName: 'Ligia',
//     lastName: 'Labravanel'
// }
// AddNewAuthor(author1)

async function getAllAuthor() {
    const authors = await prisma.author.findMany()
    console.log(authors)
}

getAllAuthor()

async function getAuthorById(authorId: number) {
    const author = await prisma.author.findUnique({
        where: {
            id: authorId
        }
    })
    if (author == null) console.log('Autor não encontrado')
    else console.log(author)
}

getAuthorById(2)

async function deleteAuthor(id: number) {
    const author = await prisma.author.delete({
        where: {
            id: id
        }
    })
    if (author == null) console.log('Autor não encontrado')
    else console.log('Autor deletado com sucesso')
}

async function updateAuthor(id: number, authorDTO: AuthorDTO) {
    const author = await prisma.author.update({
        where: {
            id: id
        },
        data: authorDTO
    })
    if (author == null) console.log('Autor não encontrado')
    else console.log('Autor atualizado com sucesso' + author)
}


// add a new book
type BookDto = {
    title: string
    isFiction: boolean
    datePublished: Date
}
async function addNewBook($book: BookDto, $authorId: number) {
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

let livro: BookDto = {

    title: 'Harry',
    isFiction: true,
    datePublished: new Date

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
}
