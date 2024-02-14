import * as dotenv from "dotenv";  //sistema para configuracao de ambientes ......  o arquivo .env, salva dados que nao ficam públicos do ambiente....
import express from "express";
import cors from "cors"; //serve para abrir as portas para as conexções
import { authorRouter } from "./author/author.router";
import { bookRouter } from "./book/book.router";

dotenv.config();

// para garantir que vai conectar na porta 8000 (esta no .env), porque se entrar em outra porta ele irá fechar a aplicação
if (!process.env.PORT) {
    process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/author", authorRouter)
app.use("/api/book", bookRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

