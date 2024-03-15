// importando o módulo sequelize
const Sequelize = require('sequelize');
// importando o módulo interno database.js
const connection = require('./database');
// Define a estrutura da Tabela Usuarios do Banco de Dados
const Usuarios = connection.define('Usuarios', {
nome: {
type: Sequelize.STRING,
allowNull: false
},
email: {
type: Sequelize.STRING,
allowNull: false
},
senha: {
type: Sequelize.STRING,
allowNull: false
}
});
// sincroniza com o banco de dados
Usuarios.sync({force: false}).then( () => {} );
// exportando o módulo
module.exports = Usuarios;