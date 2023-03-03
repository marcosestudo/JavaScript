// Funções de alta-ordem, ou high-order functions, são funções que
// recebem outras funções como parâmetro e as executam em algum momento
function calcular(a, b, operacao) {
  console.log("Realizando uma operação.")
  const resultado = operacao(a, b)
  return resultado
}