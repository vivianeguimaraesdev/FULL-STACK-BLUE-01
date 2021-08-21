const express = require("express");
const app = express();

//Definindo qual porta vamos usar
const port = 3000;

app.use(express.json()); //falar pras as reqs  do express trabalharem com Json
//Criando uma lista/array para os Games

const jogos = [
  {
    id:1, 
    nomeJogo: "DOTA 2",
    imagemJogoURL:"https://s2.glbimg.com/lIkgP2db_-7Jxr_szfBPi9oGzfY=/0x0:616x347/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/b/p/6KBtpEQsAB4AU3XKddAA/dota-2-1.jpg",
  },

  {
    id:2, 
    nomeJogo:"GTA - San Andreas",
    imagemJogoURL:"https://www.yourgameszone.com/wp-content/gallery/gta-san-andreas/3.jpg",
  },

  {
    id:3,
    nomeJogo:"The Witcher 3 - Wild Hunt ",
    imagemJogoURL:"https://static.cdprojektred.com/thewitcher.com/news/witcher3/big/thewitcher.com_pt-BR_1589875691_5ec393ebe0ad77.90555800.jpg",
  },
    
  {
    id:4, 
    nomeJogo: "Bioshock",
    imagemJogoURL:"https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_BioshockRemastered_image1600w.jpg",
  },

  {
    id:5,
    nomeJogo:"Half Life 2",
    imagemJogoURL:"https://1.bp.blogspot.com/-W7AmA7Ba3Rc/YI53GJqAI9I/AAAAAAAAAdA/uXJw4M6RAAospXjXI_Kv3WJ70BDYI9xnQCNcBGAsYHQ/s1440/thumb-1920-586163.jpg",
  },

  {
    id:6, 
    nomeJogo: "Red Dead Redemption 2",
    imagemJogoURL:"https://news.microsoft.com/wp-content/uploads/prod/sites/42/2020/04/RDR_XBOX_1920X1080-WIRE-5ea198f09b883-960x640.jpg",
  },

  {
    id:7,
    nomeJogo:"Ultimate Mortal Kombat - Trilogy",
    imagemJogoURL:"https://gametrex.com/wp-content/uploads/2019/01/Mortal-Kombat-Trilogy-Free-Download-800x450.jpg",
  },

  {
    id:8,
    nomeJogo:"The Legend of Zelda - A Link to The Past",
    imagemJogoURL:"https://3.bp.blogspot.com/_vAxLnr-8Y7E/TNcFiOWJi8I/AAAAAAAAAVQ/3FQq3-8tnvc/s1600/zelda-a-link-to-the-past.gif",
  },

  {
    id:9,
    nomeJogo:"Guitar Hero 3 - Legends of Rock",
    imagemJogoURL:"https://studiosol-a.akamaihd.net/uploadfile/letras/playlists/a/7/e/7/a7e767a557fa4effa0b1c31ceede6f17.jpg",
  },

  { id:10,
    nomeJogo:"Valorant",
    imagemJogoURL:"https://valorantstrike.com/wp-content/uploads/2020/08/Valorant-Wallpaper-Girls-Rainbow-Display.jpg",
  },
];

const msgInicio = [
  "Bem vindos",
  "Ola amigos, bem vindo ao servidor",
  "Servidor de jogos",
  "Este é meu servidor",
];

//criaçao de randomização da mensagem
function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function frase(num) {
  return msgInicio[num];
}
//função de validação:
//validação boleana de filmes
const getJogosValidos = () => jogos.filter(Boolean);

//validação de ID a partir do varrimento do array
const getJogosByID = (id) => 
  getJogosValidos().find((jogo) =>jogo.id == id);


//GET / home
app.get("/", (req, res) => {
  res.send(`<h1>${frase(randomMinMax(0, 3))}</h1>`);
});

jogos.forEach(function (item, indice) {
  console.log(item, indice);
});

//rota Listando os jogos que sejam validos

app.get("/jogos", (req, res) => {
  res.send(getJogosValidos());
  
});

//rota random pra jogos
function jogosRandom(num) {
  return jogos[num];
}
app.get("/jogorandom", (req, res) => {
  res.send(`<h1>${jogosRandom(randomMinMax(0, jogos.length))}</h1>`);
});

//Res manda uma informação/uma mensagem
//Req espera alguma coisa


//rota de cadastrar novos jogos
//lista -GET
//criar - POST
// update - PUT
//Deletar - DELETE

app.post("/jogos", (req, res) => {
  const novoJogo = req.body.novoJogo;
  const id = jogos.length + 1;
  jogos.push(novoJogo);

  res.send(`Jogo Adicionado com sucesso:${novoJogo}.
    O ID no novo jogo é ${id}`);
});

app.put("/jogos/:id", (req, res) => {
  const id = req.params.id - 1;
  const novoNome = req.body.novoNome;

  if(!jogos){
    res.send(`Jogo indisponivel `)
  }

  res.send(`Jogo anterior: ${nomeAnterior}
    Jogo atualizado com sucesso: ${novoNome}
    O ID no novo jogo é ${id}`);
});
app.delete("/jogos/:id", (req, res) => {
  const id = req.params.id - 1;
  delete jogos[id];
  res.send(`Jogo deletado com sucesso`);
});

//Fim dos metodos

//Requirindo jogos por ID
//Usando o Req(recebendo uma informação do servidor)

app.get("/jogos/:id", (req, res) => {
  const id = req.params.id ; //cria um id e armazena
  const jogo = getJogosByID(id); //pega o jogo da lista via ID e assimila o valor a constante a ser exibida
  
  if(!jogo){
    res.send(`Jogo indisponivel ID, Inválido `)
  }
  res.send(jogo); //retorna o id e o jogo
  }
);

//Escuta o serviço solicitado
app.listen(port, () => {
  console.info(`App está rodando em: http://localhost:${port}/`);
});