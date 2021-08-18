//Calculadora JS

const nome = 'Calculadora';

function soma(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function multi(a, b){
    return a + b;
}

function divisao(a, b){
    return a / b;
}

//O modulo contém métodos, funções, valores, que queremos usar em outras aplicações

module.exports = {
    soma,
    subtracao,
    multi,
    divisao,
    nome
}
