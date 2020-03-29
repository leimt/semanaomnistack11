const express = require('express'); // importando o módulo express para a variável express
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const app = express();  // criando a aplicação, var. que contém a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchBD, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

module.exports = app;
