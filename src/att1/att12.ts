function identificarTipo(valor: string | number): void {
    if (typeof valor === "string") {
      console.log(`O valor é uma string: "${valor}"`);
    } else {
      console.log(`O valor é um número: ${valor}`);
    }
  }
  identificarTipo("teste");
  identificarTipo(123);