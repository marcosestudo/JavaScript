// uma função recursiva é uma função que chama ela mesma

let x = 0;

function zero_a_dez(inicio) {
  if (inicio <= 10) {
    console.log(inicio);
    zero_a_dez(inicio + 1);
  }
}

zero_a_dez(x);