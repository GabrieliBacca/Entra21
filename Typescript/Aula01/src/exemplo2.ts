type jogo ={
    titulo: string,
    genero: string,
    anoLancamento: string
}

// handler é para manipular
function cadastroHandler(): void{
    const form : HTMLFormElement = document.querySelector('.cadastro-jogo') as HTMLFormElement
    const data = new FormData(form)
    //DATA salva todos os dados do meu form, assim quando dou data. consigo acessar
    
    

    const game : jogo = {
        titulo: data.get('titulo') as string,
        genero: data.get('genero') as string,
        anoLancamento:data.get('ano-lancamento') as string
    }
    console.log(game)

}

document.querySelector('.btn')?.addEventListener('click', cadastroHandler)