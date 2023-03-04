// Propriedades podem ser adicionadas na instanciação ou depois
let objeto = {nome: "Marcos"};

objeto.num = 53;

console.log(objeto);

// Duas formas de acessar as propriedades
console.log(objeto["nome"]); // colchetes
console.log(objeto.num); // ponto

console.log(objeto.num === objeto["num"]);


// Notaçao de colchetes
// Escrevendo console.log() usando colchetes
const funcao = "log";
console[funcao]("Estranho, mas pode ser útil");