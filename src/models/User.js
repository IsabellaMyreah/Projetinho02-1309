const { Model, DataTypes } = require("sequelize"); 

// class User = Tabela de Usuários no banco de dados
// extends Model = Faz referência ao modelo da tabela no banco de dados
class User extends Model {
    //static = Significa que a função estatic é estática, ou seja, não vai poder ter alguma alteração em sua estrutura. 
    static init(connection){
        super.init(
            {
                name: DataTypes.STRING, 
                email: DataTypes.STRING, 
            },
            {
                sequelize: connection
            }
        )
    } 
}

module.exports = User;

