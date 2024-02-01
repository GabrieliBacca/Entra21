import { type } from "os";
import { db } from "../utils/db.server";

export type Author = {
    id: number,
    firsName: string,
    lastName: string
}

//promessa para ter ceerteza que retornará um autor
export const getAuthors = async (): Promise<Author[]> => {

    return await db.author.findMany({
        select: {
            id: true,
            firsName: true,
            lastName: true,
        }
    })

}

export const getAuthorsById = async (id: number): Promise<Author | null> => {
    return db.author.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            firsName: true,
            lastName: true,
        }
    })
}

export const createAuthor = async (author: Omit<Author, "id">): Promise<Author> => {
    return db.author.create({
        data: author,
        select: {
            id: true,
            firsName: true,
            lastName: true,
        }
    })
}

export const updateAuthor = async (author: Omit<Author, "id">, id: number): Promise<Author> => {
    return db.author.update({
        where: {
            id: id
        },
        data: author,
        select: {
            id: true,
            firsName: true,
            lastName: true
        }
    })
}

export const deleteAuthor = async (id: number): Promise<Author> => {
    return await db.author.delete({
        where: {
            id: id
        }
    });
}
