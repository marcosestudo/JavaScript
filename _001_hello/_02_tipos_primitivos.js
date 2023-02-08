console.log(typeof 1);  // number
console.log(typeof 1.1); // number
console.log(typeof Number.MAX_VALUE); // number

console.log(typeof 1n); // bigint

console.log(typeof "M"); // string
console.log(typeof 'M'); // string

console.log(typeof true); // boolean
console.log(typeof false); // boolean

console.log(typeof null); // object == valor nulo
console.log(typeof variavel); // undefined == valor não atribuído
console.log(typeof undefined); // undefined 

// obejcts e functions são tipos complexos
console.log(typeof console); // object
console.log(typeof console.log); // function
