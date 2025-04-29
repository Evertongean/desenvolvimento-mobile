"use strict";
let nomeAluno = "João";
let nota1 = 8;
let nota2 = 6;
let nota3 = 7;
let frequencia = 80;
let mediaa = (nota1 + nota2 + nota3) / 3;
let resultada = frequencia < 75
    ? "Reprovado por falta"
    : mediaa >= 7
        ? "Aprovado"
        : mediaa >= 5
            ? "Recuperação"
            : "Reprovado por nota";
console.log(`Aluno: ${nomeAluno}`);
console.log(`Média: ${mediaa.toFixed(2)}`);
console.log(`Frequência: ${frequencia}%`);
console.log(`Situação: ${resultada}`);
