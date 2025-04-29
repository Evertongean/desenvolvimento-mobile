"use strict";
function descreverPessoa(pessoa) {
    return `${pessoa.nome} tem ${pessoa.idade} anos e trabalha como ${pessoa.profissao}.`;
}
function Pessoa(pessoa) {
    return ` eu sou ${pessoa.nome} tenho ${pessoa.idade} anos e trabalha como ${pessoa.profissao}.`;
}
console.log(Pessoa({ nome: "Everton", idade: 19, profissao: "Programador" }));
