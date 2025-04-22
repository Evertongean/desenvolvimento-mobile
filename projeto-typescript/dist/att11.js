"use strict";
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["SEGUNDA"] = 0] = "SEGUNDA";
    DiaSemana[DiaSemana["TER\u00C7A"] = 1] = "TER\u00C7A";
    DiaSemana[DiaSemana["QUARTA"] = 2] = "QUARTA";
    DiaSemana[DiaSemana["QUINTA"] = 3] = "QUINTA";
    DiaSemana[DiaSemana["SEXTA"] = 4] = "SEXTA";
})(DiaSemana || (DiaSemana = {}));
let dia = DiaSemana.QUARTA;
console.log(`Dia da semana: ${DiaSemana[dia]}`);
