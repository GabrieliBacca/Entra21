type jogo ={
    titulo: string,
    genero: string,
    anoLancamento: string
}

function cadastroHandler(): void{
    const form : HTMLFormElement = document.querySelector('.cadastro-jogo') as HTMLFormElement
    const data = new FormData(form)
    console.log(data.entries())

    const game : jogo = {
        titulo: data.get('titulo') as string,
        genero: data.get('genero') as string,
        anoLancamento:data.get('ano-lancamento') as string
    }
    console.log(game)

}

document.querySelector('.btn')?.addEventListener('click', cadastroHandler)