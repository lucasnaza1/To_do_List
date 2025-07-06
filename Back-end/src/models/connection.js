// Importa o mysql2 com suporte a Promises
const mysql = require("mysql2/promise");

// Carrega as variáveis de ambiente do arquivo .env
require("dotenv").config();

// Cria uma conexão com o banco de dados usando um pool de conexões
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

// Exporta a conexão para ser usada nos models
module.exports = connection;
