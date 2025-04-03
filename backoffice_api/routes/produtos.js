// backoffice_api/routes/produtos.js
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtos_controller');

router.get('/', produtoController.listarProdutos);
router.post('/', produtoController.criarProduto);
// ... outras rotas

module.exports = router;
