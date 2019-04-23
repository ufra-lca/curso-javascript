//1. A partir do valor de uma base e uma altura, digitado via teclado. Calcule a area de um triângulo qualquer.
let readline = require('readline-sync');

let base = readline.question("Qual a base? ");
let altura = readline.question("Qual a altura? ");
let area = (base * altura)/2;
console.log("Área= " + area );
//2. O valor de calorias a ser consumido em uma refeição, recomendado pela Organização Mundial de Saúde, é referente a 550kcal. A partir da soma das calorias dos acompanhamentos de um estudante, indique em booleano se o estudante está se alimentado de forma regular. Dados: arroz = 150 kcal, feijão = 150kcal, frango = 200kcal, refrigerante = 50kcal.
let arroz = 150;
let feijão = 150;
let frango = 200;
let refrigerante = 50;
let acompanhamentos = (arroz + feijão + frango + refrigerante);
let resposta = (acompanhamentos === 550);
console.log(resposta);
//3. Uma escola com cursos em regime semestral, realiza duas avaliações durante o semestre e calcula a média do aluno, da seguinte maneira: MEDIA = (P1 + 2P2) / 3 Fazer um programa para entrar via teclado com os valores das notas (P1 e P2) e calcular a média. Exibir a situação final do aluno (“Aprovado ou Reprovado”), sabendo que a média de aprovação é igual a cinco.
let readline = require('readline-sync');
let notaP1 = readline.question("Qual a nota da P1 ");
let notaP2 = readline.question("Qual a nota da P2 ");
let media = (notaP1 + notaP2)/3;
if(media >= 5){
  console.log("Aprovado!")
}
else{
  console.log("Reprovado!")
}
// 4. Entrar com o peso e a altura de uma determinada pessoa. Após a digitação, exibir se esta pessoa está ou não com seu peso ideal. Veja tabela da relação peso/altura2.
//Relação peso/altura2 (imc) 
//imc < 20 Abaixo do peso
//20 <= imc < 25 Peso ideal
//imc >= 25 Acima do peso
let readline = require('readline-sync');
let peso = readline.question("Qual seu peso");
let altura = readline.question("Qual sua altura");
let imc = peso/(altura*altura);
if(imc < 20){
  console.log("Abaixo do peso")
}
else if(imc >= 20 && imc < 25){
  console.log("Peso ideal")
}
else{
  console.log("Acima do peso")
}
//5.Faça uma calculadora usando switchCase utilizando os operadores aritiméticos apresentados na aula.
let readline = require('readline-sync');
let primeiroValor = Number(readline.question("Insira o primeiro valor"));
let segundoValor = Number(readline.question("Insira o segundoValor"));
let operador = readline.question("Informe o operador aritimético")
switch(operador){
  case "+":
  console.log(primeiroValor+segundoValor); 
  break;
  case "-":
  console.log(primeiroValor-segundoValor);
  break;
  case "*":
  console.log(primeiroValor*segundoValor);
  break;
  case "/":
  console.log(primeiroValor/segundoValor);
  break;
  default:
  console.log("Operador não encontrado.")
}
