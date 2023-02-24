// uma função recursiva é uma função que chama ela mesma
function recursiva(inicio) {
  if (inicio < 5) {
    console.log(inicio);
    recursiva(inicio + 1);
  }
}
// recursiva(0);



// mais um exemplo de função recursiva
function dividir(num) {
  console.log(num);
  if (num % 2 === 0) { // se for par, divide de novo por 2
    dividir(num / 2);
  } else {
    return num;
  }
}
dividir(40);



// // sem condição de parada, a função recursiva cria um loop "infinito" até estourar o limite da pilha de execução
// function dobrar(x){
//   console.log(x);
//   dobrar(x * 2);
// }
// dobrar(1);