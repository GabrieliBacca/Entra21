import { type } from "os";
import { db } from "../utils/db.server";
import { Author } from "../author/author.service"

type Book = {
    id: number,
    title: string,
    isFiction: boolean,
    datePublished: Date,
    author: Author
}

type CreateBookDTO = {
    id: number,
    title: string,
    isFiction: boolean,
    datePublished: Date,
    authorId: number
}



// seria isso aqui   async function   = async (): Promise<Author[]> => {}               ....
export const getBooks = async (): Promise<Book[]> => {
    // const author = await db.book.findMany()   // ou pode tirar o const e colocar direto no return....
    return await db.book.findMany({
        select: {
            id: true,
            title: true,
            isFiction: true,
            datePublished: true,
            author: true,

        }

    })
}

export const getBooksById = async (id: number): Promise<Book | null> => {

    return await db.book.findUnique({
        where: {
            id: id
        }, select: {
            id: true,
            title: true,
            isFiction: true,
            datePublished: true,
            author: true,
        }

    })
}


//o select tem que ter os campos do Book... lembrar....
export const CreateBook = async (book: CreateBookDTO): Promise<Book> => {
    return db.book.create({
        data: book,
        select: {
            id: true,
            title: true,
            isFiction: true,
            datePublished: true,
            author: true,
        }
    })
}

