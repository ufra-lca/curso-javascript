let formElem = document.getElementById('add-form');
function calcularSoma(a, b){
  return a + b;
}
formElem.onsubmit = event => {
  event.preventDefault();
  let valor1 = Number.parseFloat(document.getElementById("primeiroValor").value);
  let valor2 =  Number.parseFloat(document.getElementById("segundoValor").value);
  let resul = calcularSoma(valor1,valor2);

  let pResult = document.getElementById('resultado');
  pResult.innerHTML = "Resultado: " + resul;
  
  console.log(resul);
}

