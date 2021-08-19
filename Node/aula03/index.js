const express = require('express');
const app = express();

//Definindo qual porta vamos usar
const port = 3000;

//Acessar o json
app.use(express.json());

//Criando uma lista/array para os Games

const jogos = [
    'DOTA 2',
    'GTA',
    'The Witcher',
    'Bioshock',
    'Half Life 2',
    'Red Dead Redemption',
    'Ultimate Mortal Kombat - Trilogy',
    'The Legend of Zelda - A Link to The Past',
    "Guitar Hero 3 - Legends of Rock",
    "Valorant",
];

const msgInicio = [
    'Bem vindos',
    'Ola amigos, bem vindo ao servidor',
    'Servidor de jogos',
    'Este é meu servidor',
];

//criaçao de randomização da mensagem 
function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function frase(num){
    return msgInicio[num];
}

//GET / home
app.get('/',(req, res) => {
    res.send(`<h1>${frase(randomMinMax(0,3))}</h1>`);
});

jogos.forEach(function (item, indice){
    console.log(item, indice);
});

//random pra jogos
function jogosRandom(num){
    return jogos[num]; 
}
app.get('/jogorandom',(req, res) => {
    res.send(`<h1>${jogosRandom(randomMinMax(0,jogos.length))}</h1>`);
});

//Res manda uma informação/uma mensagem
//Req espera alguma coisa

//Listando os jogos
app.get('/jogos',(req, res)=>{
    res.send(jogos);
});

//Requirindo jogos por ID
//Usando o Req(recebendo uma informação do servidor)

app.get('/jogos/:id', (req, res)=>{
    const id = req.params.id -1; //cria um id e armazena
    const jogo = jogos[id]; //pega o jogo da lista via ID e assimila o valor a constante a ser exibida
    if(id>jogos.length -1 || id<0 ) {
        res.send('ID Inválido, Jogo não existe na lista');
    }else{
        res.send(jogo); //retorna o id e o jogo
    };

   
});

//Escuta o serviço solicitado
app.listen(port, () => {
    console.info(`App está rodando em: http://localhost:${port}/`)
});

//Rota que cadastra um novo game
//LISTA/READ - GET
//CRIAR - POST
//ATUALIZAR - PUT
// DELETAR - DELETE
app.get('/jogos')

app.post('/jogos',(req, res) =>{
    const jogo = req.body.jogo;
    const id = jogos.length + 1;

    jogos.push(jogo);

    res.send(`Jogo adicionado com sucesso: ${jogo}.
    O ID do jogo é ${id}`)
});

//Fazendo o put - atualização

app.put('/jogos/:id', (req, res) =>{
    const id = req.params.id -1;
    const jogo = req.body.jogo;

    const nomeAnterior = jogos[id];
    jogos[id] = jogo;

    res.send(`Jogo anterior: ${nomeAnterior}Jogo atualizado com sucesso: ${jogo}`)
});

//Usando o delete
//Você busca pelo id e pede para deletar aquele id

app.delete('/jogos/:id', (req, res) => {
    const id = req.params.id -1;
    delete jogos[id];

    res.send("Filme excluído com sucesso");
});