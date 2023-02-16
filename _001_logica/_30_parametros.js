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

