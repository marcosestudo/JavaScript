// Retorno é a saída da função

// O retorno é usado para armazenarmos a saída da função em uma variável
// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined
function calcularMedia(a, b) {
  const media = (a + b) / 2
}

const resultado = calcularMedia(5, 9);

console.log(resultado);



// Para dizer qual é a saída de uma função usamos o return
function criarProduto(nome, preco) {
  const produto = { nome, preco, estoque: 1 }
  return produto
}

const notebook = criarProduto("TV", 3000);

console.log(notebook);




// Também podemos jogar a saída de uma função dentro dos parâmetros de outra
console.log(criarProduto("Celular", 1000));