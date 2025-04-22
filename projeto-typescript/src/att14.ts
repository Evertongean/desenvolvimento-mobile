function descreverPessoa(pessoa: { nome: string; idade: number; profissao: string }): string {
    return `${pessoa.nome} tem ${pessoa.idade} anos e trabalha como ${pessoa.profissao}.`;
  }
  console.log(descreverPessoa({ nome: "Ana", idade: 30, profissao: "Engenheira" }));