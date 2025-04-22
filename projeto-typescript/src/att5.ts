let notas: number[] = [7.5, 8.0, 9.5, 10];
let media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
console.log(`Média das notas: ${media}`);