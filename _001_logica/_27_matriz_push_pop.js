const matriz = [ // L = linha, C = coluna
  ["L0, C0", "L0, C1", "L0, C2"],
  ["L1, C0", "L1, C1", "L1, C2"],
  ["L2, C0", "L2, C1", "L2, C2"]
];

matriz[0].push("nova coluna");
matriz.push(["nova linha"]);
console.table(matriz);


matriz[1].pop();
console.table(matriz);