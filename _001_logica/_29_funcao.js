// funcao sem parâmetro e sem retorno
function passando() {
  console.log("Tô só passando...");
}

// funcao sem retorno
function ola(nome) {
  console.log(`Olá, ${nome}`);
}

// funcao com retorno
function quadrado(num) {
  return num * num;
}

let nome = "Marcos";
// chamadas das funções declaradas acima
passando();
ola(nome);
console.log(quadrado(3));