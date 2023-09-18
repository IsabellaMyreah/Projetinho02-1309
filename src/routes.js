const express = require("express")

//Importando o arquivo do UserController, que contem as funções de criar, buscar, atualizar e deletar os dados do usuário.
const UserController = require("./controllers/UserController");


// Inicializar as rotas 
const routes = express.Router(); 

//Criando a rota /users utilizando o método post para cadastrar o usuário na aplicação/banco de dados.
routes.post("/users", UserController.store)

module.exports = routes;
