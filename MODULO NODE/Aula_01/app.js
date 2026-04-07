function somar(a, b) {
  return a + b;
}

let numero1 = parseInt(prompt("Insira o primeiro numero"));
let numero2 = parseInt(prompt("Insira o segundo numero"));

const resultado = somar(numero1, numero2);
console.log(`A soma dos numeros é ${resultado}`);
