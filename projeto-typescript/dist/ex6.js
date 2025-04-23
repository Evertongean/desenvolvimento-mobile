"use strict";
let nota = 6.5;
let resultad = nota >= 7
    ? "Aprovado"
    : (nota >= 5 && nota < 7)
        ? "Recuperação"
        : "Reprovado";
console.log(resultad);
// Saída esperada: "Recuperação"
