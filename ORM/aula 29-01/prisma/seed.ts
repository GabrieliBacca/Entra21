import { Prisma } from "@prisma/client";
import { db } from "../src/utils/db.server";


type Author = {
    firsName: string;
    lastName: string;
};

type Book = {
    title: string;
    isFiction: boolean;
    datePublished: Date
};

async function seed() {
    await Promise.all(
        getAuthors().map((author) => {
            return db.author.create({
                data: {
                    firsName: author.firsName,
                    lastName: author.lastName
                }
            })
        })
    )
    const author = await db.author.findFirst({
        where: {
            firsName: "Maria"
        }
    })

    await Promise.all(
        getBooks().map((book) => {
            return db.book.create({
                data: {
                    title: book.title,
                    isFiction: book.isFiction,
                    datePublished: book.datePublished,
                    authorId: 1,
                }
            })
        })
    )
}
seed();

function getAuthors(): Array<Author> {
    return [
        {
            firsName: 'Maria',
            lastName: 'Marçal'
        },
        {
            firsName: 'Jananina',
            lastName: 'Janaria'
        },
        {
            firsName: 'Paulo',
            lastName: 'Paulino'
        },
    ]
}

function getBooks(): Array<Book> {
    return [
        {
            title: 'As aventuras de tiko e teko',
            isFiction: true,
            datePublished: new Date(),
        },
        {
            title: 'Como treinar seu programador',
            isFiction: false,
            datePublished: new Date(),
        },
        {
            title: 'Guia de sobrevivência do mochileiro de Blumenau',
            isFiction: true,
            datePublished: new Date(),
        },
    ]
}

