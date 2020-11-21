import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
  return response.json({message: 'Hello Livia'})
});

app.listen(3333);

//Driver nativo, query builder, ORM (niveis de abstracao)

//driver nativo -> sqlite3 (query em sql)
//query builder -> knex.js (query em js) - da pra trocar sem mexer na applicacao
//ORM -> typeorm (cada tabela vira uma classe) - da pra trocar sem mexer na applicacao
// table: user - class: User  -> relacionamento de objeto para cada registro da tabela