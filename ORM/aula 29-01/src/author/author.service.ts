import { type } from "os";
import { db } from "../utils/db.server";

type Author = {
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