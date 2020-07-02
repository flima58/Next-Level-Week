import knex from 'knex';
import path from 'path'


const connection = knex ({
    client : 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,  
})

export default connection;  

//Migrations = O controle de versão do banco de dados (Historico do banco de dados)