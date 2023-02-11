let num = 10;

do {
  console.log(num);
  num++;
  // pode parar também com o break
  if (num == 5) {
    console.log("break");
    break;
  } 
} while (num < 10);

