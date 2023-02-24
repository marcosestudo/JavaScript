// uma função recursiva é uma função que chama ela mesma

let num = 0;

function recursiva(inicio) {
  if (inicio < 5) {
    console.log(inicio);
    recursiva(inicio + 1);
  }
}

recursiva(num);