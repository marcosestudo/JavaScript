// métodos são as funções de um objeto

let pessoa = {
  nome: "Marcos",
  fala: function() {
    console.log("Olá...");
  }
}

console.log(typeof pessoa);
console.log(typeof pessoa.fala);
pessoa.fala();