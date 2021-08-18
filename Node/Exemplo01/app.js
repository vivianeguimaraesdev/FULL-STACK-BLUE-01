// var, let e const
//tipos de variáveis 

var nome = 'Vivianne'; // escopo global
console.log(nome);
console.log("Hello Node.js!");

let idade = 26; // escopo local
console.log(idade);
//Exemplo
function aulaNova(){
    let idade= 30;
}
//não consegue chamar a variavel idade fora da função

const profissao = 'Desenvolvedora'; //constante
//Exemplo
//profissao = 'instrutora'; //vai dar erro por ser constante

//Booleanos
const mostrarSite = true;

const site = 'https://blueedtech.com.br/';

if (mostrarSite){
    console.log(site)
};