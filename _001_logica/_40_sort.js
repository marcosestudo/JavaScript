const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

// sort 
// Ordena os elementos de um array a partir de comparações entre duplas de elementos
// CUIDADO: o sort modifica o array original
personagens.sort(function (a, b) {
  return a.nivel - b.nivel; // compara os níveis dois a dois para ordenar
});
personagens.forEach((personagem) => console.log(personagem.nivel));



// Como ordenar sem mudar o array original?
// O slice cria uma cópia do array com o intervalo que pedimos, encadeando
// o slice sem passar nenhum parãmetro(para que todo o array seja copiado)
// ordenaremos a cópia, deixando o array original sem modificação
let personagens2 = personagens.slice().sort(function (a, b) {
  return b.nivel - a.nivel; // Aqui ordenaremos em ordem decrescente
});
console.log("---------------");
personagens2.forEach((personagem) => console.log(personagem.nivel));
console.log("---------------");
personagens.forEach((personagem) => console.log(personagem.nivel));