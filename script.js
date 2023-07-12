// Contatenação
// const idade = 37;
// console.log(`A minha idade é ${idade} anos`);
// console.log('A minha idade é ' + idade + ' anos');


// =======================================================================================
// Numbers and Math
// const num = Number(prompt("Digite um número: "));

// // pode-se omitir o window
// const numeroTitulo = window.document.getElementById("numero-titulo");
// const texto = window.document.getElementById("texto");

// numeroTitulo.innerHTML = num;

// texto.innerHTML = '';
// texto.innerHTML += `<p>Seu número + 2 é: ${num + 2}.</p>`
// texto.innerHTML += `<p>seu número com duas casas decimais: ${num.toFixed(2)}.</p>`
// texto.innerHTML += `<p>Seu número é inteiro: ${Number.isInteger(num)}.</p>`
// texto.innerHTML += `<p>A raiz quadrada do seu número é: ${num** 0.5}.</p>`
// texto.innerHTML += `<p>Seu número é NaN: ${Number.isNaN(num)}.</p>`
// texto.innerHTML += `<p>Seu número arredondado para baixo: ${Math.floor(num)}.</p>`
// texto.innerHTML += `<p>Seu número arredondado para cima: ${Math.ceil(num)}.</p>`

// ==========================================================================
//Arrays

const alunos = ['luiza', 'augusta', 'julio'];
//alunosEmLetrasMaiusculas = alunos.map(function(aluno){ return aluno.toUpperCase(); })

console.log(alunos.map(function(aluno){ return aluno.toUpperCase() }));
