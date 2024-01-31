//criar metodo getBook

import { db } from "../utils/db.server";

type Book = {
    id: number,
    title: string;
    isFiction: boolean;
    datePublished: Date
}

export const getBooks = async (): Promise<Book[]> => {

    return await db.book.findMany({
        select: {
            id: true,
            title: true,
            isFiction: true,
            datePublished: true
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
            datePublished: true
        }
    })
}