/* 
    Arquivo: ./index.js
    Função: Iniciar o servidor web
*/

const porta = 5000;
const express = require('express');

const servidor = express();

servidor.use(express.static(__dirname + "/"));

servidor.engine('html', require('ejs').renderFile);
servidor.set('view engine', 'html');

servidor.get('/', function(req, res) {
    res.render('index.html'); // carrega ./views/index.html
});

servidor.listen(porta); 

// Principal arquivo: ./controllers/controller.js 