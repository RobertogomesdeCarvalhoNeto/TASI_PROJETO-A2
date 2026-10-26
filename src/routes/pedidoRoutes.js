const { Router } = require('express');
const pedidoController = require('../controllers/pedidoController');

const router = Router();

router.post('/pedidos', pedidoController.criar);
router.get('/pedidos', pedidoController.listar);
router.get('/pedidos/:id', pedidoController.buscarPorId);
router.patch('/pedidos/:id/status', pedidoController.atualizarStatus);

module.exports = router;