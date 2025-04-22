interface Aluno {
    nome: string;
    matricula: number;
    ativo: boolean;
  }
  
  let aluno1: Aluno = {
    nome: "Joana",
    matricula: 12345,
    ativo: true,
  };
  console.log(aluno1);