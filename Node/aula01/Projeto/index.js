const express = require('express'); //importa o express
const app = express(); //inicializei o express

//Fazendo a rota que retorna um dado
//Primeiro o caminho da pasta '/' depois uma função callback que fiz com arrowfunction
app.get('/', (req, res) =>{
    res.send('Hello Wolrd!')
})
//Mesma coisa só usei function normal sem ser arrow function
app.get('/blue', function(req, res){
    res.send('<h1>Welcome Bluemer!</h1>')
})

app.listen(3000)