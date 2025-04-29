"use strict";
let idadeuser = 20;
let resultadodim = idadeuser < 16
    ? "Não vota"
    : (idadeuser >= 16 && idadeuser <= 17) || idadeuser > 70
        ? "Voto facultativo"
        : "Voto obrigatório";
console.log(resultadodim);
