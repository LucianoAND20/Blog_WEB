// importando o módulo sequelize
const Sequelize = require('sequelize');
/**
* Faz a conexão com o banco de dados criado através do objeto
Sequelize
* O primeiro parâmetro é um nome do banco de dados (que já deve
ter sido criado)
* O segundo parâmetro é o usuário do banco de dados MySQL
* O terceiro parâmetro é a senha do MySQL (a senha que você
definiu no momento da instalação do MySQL)
* O último parâmetro define através de objeto:
* - host: o ip da maquina a qual estamos conectados, no nosso
caso localhost
* - dialect: o SGBD que vamos utilizar, no nosso caso MySQL
*/
const connection = new Sequelize('bd_blogsys', 'root',
'123456789', {host: 'localhost',
dialect: 'mysql'
});
// exporta a conexão para ser utilizada em outros arquivos
module.exports = connection;