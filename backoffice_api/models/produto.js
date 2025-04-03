// backoffice_api/models/produto.js
const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
  imageUrl: String,
});

module.exports = mongoose.model('Produto', produtoSchema);
