let arr = [0, 1, 2, 3];
arr[9] = "cinco";

console.log(arr);
console.log(arr[4]); // undefined

arr[4] = "quatro";
console.log(arr);

console.log(arr.length);