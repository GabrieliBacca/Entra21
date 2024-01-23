import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

async function CadastrarIngrediente(nome: string) {
    const ingrediente = await client.ingrediente.create({
        data: {
            nome: nome
        }
    })
    console.log(`Ingrediente ${ingrediente.nome} cadastrado com sucesso`)
}

// CadastrarIngrediente('Farinha de Trigo')
// CadastrarIngrediente('Creme de leite')
// CadastrarIngrediente('Molho de tomate')
// CadastrarIngrediente('Macarrão')

async function CriarPrato(nome: string, listaIngredientes: string[]) {
    const ingredientes = listaIngredientes.map(async (ingrediente) =>
        await client.ingrediente.findMany({
            where: {
                nome: ingrediente
            }
        })
    )
    console.log(ingredientes)
}