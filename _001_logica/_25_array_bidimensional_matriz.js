let arr = [
  "nível 1",
  ["nível 2", 53, true],
  [
    ["nível 3, item 1", "Olá"],
    ["nível 3, item 2", "Oi"]
  ]
];

console.log(arr);
console.log(arr[0]); // primeiro nível
console.log(arr[1]);
console.log(arr[1][0]); // segundo nível
console.log(arr[2]);
console.log(arr[2][0]);
console.log(arr[2][0][0]); // terceiro nível, 3 colchetes encadeados



const matriz = [ // L = linha, C = coluna
  ["L0, C0", "L0, C1", "L0, C2"],
  ["L1, C0", "L1, C1", "L1, C2"],
  ["L2, C0", "L2, C1", "L2, C2"]
];

console.log(matriz[0][2]);
console.log(matriz[1][1]);
console.log(matriz[2][0]);