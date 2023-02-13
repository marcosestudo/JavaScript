let arr = [0, 1, 2, 3, "quatro", "cinco"];

// retorna cópia do intervalo dado, mantendo o array original
// sem primeiro argumento, começa do início
// sem segundo argumento, vai até o fim
// sem argumentos, retorna cópia do array todo

// slice(início, fim)
let arr2 = arr.slice(1, 5);
console.log(arr, arr2);

arr2 = arr.slice();
console.log(arr, arr2);

// podemos usar números negativos para iniciar contagem do índice a partir do fim
arr2 = arr.slice(-3);
console.log(arr, arr2);