// importando o módulo express.js
const express = require('express');
// importando o módulo body-parser
const bodyParser = require('body-parser');
// instanciando o express.js
const app = express();
// Iniciando a nossa View engine EJS
app.set('view engine', 'ejs');
// utilizando o body parser para trabalhar com formulários
app.use(bodyParser.urlencoded({ extended: false }));
// além de aceitar dados de formulário também aceitará dados noformato json
app.use(bodyParser.json());
// vamos configurar o express para que os arquivos estáticos(css, js, imagem etc)
app.use(express.static('assets'));
/**
* Criando rotas
* Vamos usar o método get
* O primeiro parâmetro define o caminho da rota que será criado,
* O segundo parâmetro define a função a qual será chamada ao
criar a rota.
* A função terá dois parâmetros:
* - O primeiro receberá a requisição (request)
* - O segundo receberá a resposta (Response)
*/
// Rota para a página inicial do nosso aplicativo
app.get('/', function ($req, $res) {
    $res.render('index');
});
// Rota para a página de envio do formulário de contato
app.get('/cadastro', function($req, $res) {$res.render('cadastro');
    });
// Rota para o recebimento dos dados de formulário
app.post('/cadastrar_usuario', function ($req, $res) {
    var $nome = $req.body.nome;
    var $email = $req.body.email;
    var $senha = $req.body.senha;
    $res.send(`Usuário: ${$nome} de e-mail ${$email} e senha
    ${$senha}`);
});
/*
* O primeiro parâmetro é a porta na qual o nosso servidor vai
rodar
* O segundo parâmetro é uma função. Toda vez que o servidor for
iniciado a função é chamada.
* A variável $erro ajuda a tratar possíveis erros ocorridos
*/
app.listen(4000, function ($erro) {
    if ($erro) {
        console.log('Ocorreu um erro!');
    } else {
        console.log('Servidor iniciado com sucesso!');
    }
});