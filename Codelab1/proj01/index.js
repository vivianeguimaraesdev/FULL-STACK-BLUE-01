const express = require('express');
const app = express();

//Definindo qual porta vamos usar
const port = 3000;

//Criando uma lista/array para os filmes

const filmes = [
    'Matrix',
    'Vingadores',
    'Velozes e Furiosos',
];

//GET / home
app.get('/',(req, res) => {
    res.send("Bem vindos ao site, lista de filmes!");
});

//Res manda uma informação/uma mensagem
//Req espera alguma coisa

//Listando os filmes
app.get('/filmes',(req, res)=>{
    res.send(filmes);
});

//Usando o Req(recebendo uma informação do servidor)

app.get('/filmes/:id', (req, res)=>{
    const id = req.params.id -1; //cria um id e armazena
    const filme = filmes[id]; //pega o filme da variavel filmes
    res.send(filme); //retorna o id e o filme
});


//Escuta o serviço solicitado
app.listen(port, () => {
    console.info(`App está rodando em: http://localhost:${port}/`)
});

