// O parâmetro é a entrada da função.

// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função
function dobro(x) {
  console.log("O dobro de " + x + " é " + (x * 2));
}

dobro(5);
dobro(7);

// Se uma função for chamada sem informar o parâmetro
// o valor usado para ele será o undefined
dobro();



// VALOR PADRÃO 
// Mas podemos declarar um valor padrão para um parãmetro, assim, 
// se ele não for informado, o valor padrão será usado no lugar do undefined
function dizerOla(nome = "mundo") {
  console.log("Olá, " + nome + "!")
}

dizerOla("Marcso");
dizerOla();



// MÚLTIPLOS PARÂMETROS
// Uma função pode ter quantos parâmetros quisermos, basta separaá-los por vírgula
function soma(a, b) {
  console.log(a + b)
}

soma(1, 1);
soma(34, 5);



// VALOR PADRÃO
// Ao usar vários parâmetros, deixamos os com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "leitor") {
  const usuario = { nome, email, senha, tipo };
  console.log(usuario);
}

criarUsuario("Marcos", "marcos@email.com", "1234");