let estaSol = false;

if (estaSol) {
   console.log('vou a praia');
}
else {
  console.log('vou para a academia');
}

let numero = 0;
if (numero > 0) {
  console.log('Número positivo');
}
else if(numero == 0) {
  console.log('Número igual a zero');
}
else {
  console.log('Número negativo');
}
/// maneira de fazer uma condicional sem if e else
let número = 3;
let paridade = número % 2 == 0 ? 'par' : 'impar';
console.log(paridade);

