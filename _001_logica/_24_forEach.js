let arr = [0, 1, 2, "três", "quatro", "cinco"];

// // iterando com for
// for (let i = 0; i < arr.length; i++) {
//   const elemento = arr[i];
//   console.log(arr[i]);
// }

// o forEach deixa a iteração mais enxuta
arr.forEach(element => {
  console.log(element);
});