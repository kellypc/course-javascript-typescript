function criaPessoa (nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  }
}

// uma outra forma de criar objeto, para obter o mesmo resultado, pois o javascript entende é:
function criaPessoa (nome, sobrenome, idade) {
  return {nome, sobrenome, idade};
}

//Execução
const pessoa1 = criaPessoa('kelly', 'Pereira', 37);
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade)