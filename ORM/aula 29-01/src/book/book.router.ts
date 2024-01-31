import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator"

import * as BookService from "./book.service"
import { request } from "http";

export const bookRouter = express.Router()

//get: lista com todos os autores

bookRouter.get("/", async (request: Request, response: Response) => {
    try {
        const books = await BookService.getBooks()
        return response.status(200).json(books)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

bookRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)
    try {
        const book = await BookService.getBooksById(id)

        if (book)
            return response.status(200).json(book)
        else
            return response.status(400).json('Livro não encontrado')
    } catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})