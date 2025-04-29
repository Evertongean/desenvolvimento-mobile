function descreverPessoa(pessoa: { nome: string; idade: number; profissao: string }): string {
    return `${pessoa.nome} tem ${pessoa.idade} anos e trabalha como ${pessoa.profissao}.`;
  }
function Pessoa(pessoa: { nome: string; idade: number; profissao: string }): string {
    return ` eu sou ${pessoa.nome} tenho ${pessoa.idade} anos e trabalha como ${pessoa.profissao}.`;
  }
  console.log(Pessoa({ nome: "Everton", idade: 19, profissao: "Programador" }));  