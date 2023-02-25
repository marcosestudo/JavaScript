function somar(a, b) {
  return a + b;
}
let operacao = somar; // Variáveis e constantes podem receber funções
console.log(operacao(17, 36));



// Função anônima é uma função criada sem nome para ser armazenada em 
// uma varável ou para ser usada em outra função (high order function)
operacao = function (a, b) {
  return a - b;
}
console.log(operacao(217, 270));



// Uma função anônima não pode ser usada antes de ser inicializada
ola();
oi(); // Gera erro

function ola() {
  console.log("Olá...");
}

const oi = function () {
  console.log("Oi...");
}