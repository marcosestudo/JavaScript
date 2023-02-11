let num = "50";

num = parseInt(num); // convertendo pra int, testando se o switch diferencia os tipos

switch (num) {
  case 10:
    console.log("caso 1");
    break;
  case 50:
    console.log("caso 2");
    break;
  case 100:
    console.log("caso 3");
    break;
  default:
    console.log("default");
}