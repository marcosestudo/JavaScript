// prompt é usado para receber entrada de dados no navegador

let nome = prompt("Nome: ");
alert(`Nome: ${nome}`);

// Toda entrada é uma string
let num = prompt("Num: ");
alert(`Num: ${num}; Tipo: ${typeof num}`);

// Se precisamos de outro tipo, devemos convertê-lo
num = parseInt(prompt("Num: "));
alert(`Num ${num}; Tipo: ${typeof num}`);