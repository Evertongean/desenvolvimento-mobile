"use strict";
function filtrarProdutosDisponiveis(produtos) {
    return produtos.filter(produto => produto.emEstoque);
}
let produtos = [
    { nome: "Caneta", emEstoque: true },
    { nome: "Lápis", emEstoque: false },
    { nome: "Caderno", emEstoque: true },
];
console.log(filtrarProdutosDisponiveis(produtos));
