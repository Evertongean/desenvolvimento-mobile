let alunos: Aluno[] = [
    { nome: "Lucas", matricula: 1001, ativo: true },
    { nome: "Mariana", matricula: 1002, ativo: false },
    { nome: "Pedro", matricula: 1003, ativo: true },
  ];
  
  for (const aluno of alunos) {
    if (aluno.ativo) {
      console.log(`Aluno ativo: ${aluno.nome}`);
    }
  }