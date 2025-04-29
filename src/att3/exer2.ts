let i = 1;
let soma = 0;

while (i <= 20) {
  if (i % 2 === 0) {
    soma += i;
  }
  i++;
}

console.log("Soma dos números pares entre 1 e 20:", soma);
