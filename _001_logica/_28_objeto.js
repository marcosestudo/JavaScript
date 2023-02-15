// propriedades podem ser adicionadas na instanciação ou depois
let objeto = {nome: "Marcos"};

objeto.num = 53;

console.log(objeto);

// duas formas de acessar as propriedades
console.log(objeto["nome"]); // colchetes
console.log(objeto.num); // ponto

console.log(objeto.num === objeto["num"]);



// escrevendo console.log() usando colchetes
const funcao = "log";
console[funcao]("Estranho, mas pode ser útil");