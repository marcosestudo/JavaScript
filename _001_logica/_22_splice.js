let arr = [0, 1, 2, 3, "quatro", "cinco"];
let arr2 = [10, 100, 1000];

// remove e retorna intervalo do array passado nos dois primeiros argumentos
// substitui intervalo apagado por elementos dados a partir do terceiro argumento

// splice(início, quantidade, substitutos...)
let arr3 = arr.splice(3, 2, ...arr2); // sem o spread, o novo array viraria um único elemento "[0, 1, 2, [10, 100, 1000], 'cinco']"
console.log(arr)
console.log(arr3);