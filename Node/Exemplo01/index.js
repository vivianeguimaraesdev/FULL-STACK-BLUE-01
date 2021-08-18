//Aprendendo a exportar módulos
//Esse seria o arquivo principal 
//usa o método require

const calculadora = require('./calculadora');

console.log(calculadora.soma(1, 2));
console.log(calculadora.subtracao(5, 3));
console.log(calculadora.multi(3, 5));
console.log('div' + calculadora.divisao(10,2));
