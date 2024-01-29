import { db } from "../src/utils/db.server";

type Author = {
    firstName: string,
    lastName: string
}

type Book = {
    title: string
    isFiction: boolean
    datePublished: Date
}


async function seed() {
    await Promise.all(
        getAuthors().map((author) => {
            return db.author.create({
                data: {
                    firstName: author.firstName,
                    lastName: author.lastName
                }
            })
        })
    )
    const author = await db.author.findFirst({
        where: {
            firstName: "Maria"
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
seed()


function getAuthors(): Array<Author> {
    return [
        {
            firstName: 'Jana',
            lastName: 'Bana'
        },
        {
            firstName: 'Panca',
            lastName: 'Bacana'
        },
        {
            firstName: 'Paulinho',
            lastName: 'Mocelin'
        }
    ]
}

function getBooks(): Array<Book> {
    return [
        {
            title: 'guia sobrevivencia',
            isFiction: true,
            datePublished: new Date(),
        },
        {
            title: 'como treinar seu programador',
            isFiction: false,
            datePublished: new Date(),
        },
        {
            title: 'harry pota',
            isFiction: true,
            datePublished: new Date(),
        }
    ]
}