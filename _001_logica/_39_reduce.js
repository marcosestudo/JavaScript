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



// Usando o reduce pra criar um array separando os elementos por raça
const racas = personagens.reduce(function (acumulador, personagem) {
  // se a raca na chave personagem.raca for igual a do acumulador, adiciona o personagem naquela chave
  if (acumulador[personagem.raca]) { // Está sendo usada a notação de colchetes para verificar o objeto acumulador
    acumulador[personagem.raca].push(personagem); // Dando push do personagem no array da raça
  // Se não, cria uma nova chave contendo um array com o personagem da nova raça
  } else { 
    acumulador[personagem.raca] = [personagem];
  }
  return acumulador;
}, {}); // segundo parâmetro será um objeto vazio, já que nesse caso queremos retornar um objeto
console.log(racas);