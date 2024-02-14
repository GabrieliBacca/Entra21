import express from "express"
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"   // serve para uma camada de segurança para validar as requisições .... uso opcional

import * as BookService from "./book.service"
import { request } from "http"

export const bookRouter = express.Router()

//GET: lista com todos os autores                    o ASYNC é para não criar lista de "espera" e de forma asyncrona o servidor vai responder todas sem ficar em fila....
bookRouter.get("/", async (request: Request, response: Response) => {
    try {

        const books = await BookService.getBooks;
        return response.status(200).json(books)

    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

bookRouter.get("/:id"), async (request: Request, response: Response) => {
    const id: number = await parseInt(request.params.id)
    try {
        const book = BookService.getBooksById(id)
        if (book)
            return response.status(200).json(book)
        else
            return response.status(404).json("Livro não encontrado")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
}

bookRouter.post('/',
    async (request: Request, response: Response) => {
        try {
            const book = request.body
            const newBook = await BookService.CreateBook(book)
            return response.status(201).json(newBook)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)

        }

    })
