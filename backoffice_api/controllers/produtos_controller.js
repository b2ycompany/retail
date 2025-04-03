// backoffice_api/controllers/produtos_controller.js
const Produto = require('../models/produto');

exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.criarProduto = async (req, res) => {
  const produto = new Produto(req.body);
  try {
    const novoProduto = await produto.save();
    res.status(201).json(novoProduto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// ... outras funções
