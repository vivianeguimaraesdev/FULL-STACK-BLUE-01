//Callback - função que recebe outra função como parametro ou return
//Porta é o local aonde será exacutado, ex: localhost 3000

const http = require('http');

//A segunda função recebe um request ou res para passar para o Server
//Estamos 'mexendo' no servidor
//Criando uma requisição no servidor e exibindo uma mensagem
http.createServer(function(req, res){
    res.end('<h1>Ola </h1>')
}).listen(3000);

console.log('Testando...')

/* Send -> padrão, serve para receber uma resposta, cria uma comunicação
é pra quando o servidor será usado mais vezes. */
// end -> é quando não esperamos uma resposta, para coisas rápidas. Ele faz e já fecha o servidor novamente
//Crtl + Alt + M <-- para o servidor
//localhost:3000 é uma rota

//Framework do Node -> Next, Express...