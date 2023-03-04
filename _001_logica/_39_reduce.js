const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

let nivelTotal = 0;
for (let i = 0; i < personagens.length; i++) {
  nivelTotal += personagens[i].nivel;
}

// reduce vai acumulando os valores do retorno da callback
// Chama a função callback para todos os elementos em uma matriz. 
// O valor de retorno é o resultado acumulado que é fornecido como um argumento na próxima chamada

// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotal2 = personagens.reduce(function (acumulador, personagem) {
  return acumulador + personagem.nivel;
}, 0); // segundo argumento do reduce é o valor inicial do acumulador

const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem);
  } else {
    acumulador[personagem.raca] = [personagem];
  }
  return acumulador;
}, {});