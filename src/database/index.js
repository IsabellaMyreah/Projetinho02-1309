const Sequelize = require("sequelize"); //Importando o sequelize

const dbConfig = require("../config/database"); //Importano o arquivo de configuração do banco de dados

const connection = new Sequelize(dbConfig); // Criando a conexão com o banco de dados 

module.exports = connection; // Exportando a conexão com o banco de dados isabella myreah lopes cavalcante 
