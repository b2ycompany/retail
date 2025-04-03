// backoffice_api/server.js
const express = require('express');
const mongoose = require('mongoose');
const produtosRouter = require('./routes/produtos');

const app = express();
app.use(express.json());

mongoose.connect('sua_string_de_conexao_mongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/produtos', produtosRouter);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
