import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as AuthorService from "./author.service"
import { request } from "http";

export const authorRouter = express.Router()

//get: lista com todos os autores

authorRouter.get("/", async (request: Request, response: Response) => {
    try {
        const authors = await AuthorService.getAuthors()
        return response.status(200).json(authors)

    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

authorRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)
    try {
        const author = await AuthorService.getAuthorsById(id)
        if (author)
            return response.status(200).json(author)
        else
            return response.status(400).json('Autor não pode ser encontrado')
    } catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})