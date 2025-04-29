type Alunoo = {
    nome: string;
    notas: number[];
  };
  
  function verificarAprovacao(alunos: Alunoo[]): void {
    for (const aluno of alunos) {
      const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
      const media = soma / aluno.notas.length;
      const situacao = media >= 7 ? "Aprovado" : "Reprovado";
  
      console.log(`${aluno.nome} - Média: ${media.toFixed(2)} - Situação: ${situacao}`);
    }
  }
  