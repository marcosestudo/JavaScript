// Métodos são as funções de um objeto

let pessoa = {
  nome: "Marcos",
  fala: function() { // Pra criação de métodos, não precisa usar a palavra resrevada function
    console.log(`Olá... ${this.nome}`);
  }
}

console.log(typeof pessoa);
console.log(typeof pessoa.fala);
pessoa.fala();