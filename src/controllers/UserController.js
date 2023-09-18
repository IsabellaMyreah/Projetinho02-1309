const User = require("../models/User");

module.exports = {
    async store (request, response) {
        // Desestruturando 
        const { name, email} = request.body

        //Inserindo os dados do usuário no banco de dados
        const user = await User.create({ name, email});

        //retornando uma resposta no formato json.
        return response.json(user);
    }
};
