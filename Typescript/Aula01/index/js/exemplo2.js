"use strict";
var _a;
function cadastroHandler() {
    const form = document.querySelector('.cadastro-jogo');
    const data = new FormData(form);
    console.log(data.entries());
    const game = {
        titulo: data.get('titulo'),
        genero: data.get('genero'),
        anoLancamento: data.get('ano-lancamento')
    };
    console.log(game);
}
(_a = document.querySelector('.btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', cadastroHandler);
