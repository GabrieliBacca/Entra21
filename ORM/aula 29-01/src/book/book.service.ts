//criar metodo getBook

import { Author } from "../author/author.service";
import { db } from "../utils/db.server";

type Book = {
    id: number,
    title: string;
    isFiction: boolean;
    datePublished: Date,
    author: Author
}

// usa todos os dados padrões e ao inves de ter o autor ele tem o author:number que é o id
type CreateBookDTO = {
    id: number,
    title: string;
    isFiction: boolean;
    datePublished: Date,
    authorId: number
}

export const getBooks = async (): Promise<Book[]> => {

    return await db.book.findMany({
        select: {
            id: true,
            title: true,
            isFiction: true,
            datePublished: true,
            author: true
        }
    })
}

export const getBooksById = async (id: number): Promise<Book | null> => {
    return db.book.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            title: true,
            isFiction: true,
            datePublished: true,
            author: true
        }
    })
}

export const createBook = async (book: CreateBookDTO): Promise<Book> => {
    return db.book.create({
        data: book,
        select: {
            id: true,
            title: true,
            isFiction: true,
            datePublished: true,
            author: true
        }
    })
}