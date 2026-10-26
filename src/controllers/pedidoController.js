const pedidoService = require('../services/pedidoService');

function criar(req, res) {
  try {
    const novoPedido = pedidoService.criarPedido(req.body);
    return res.status(201).json(novoPedido);
  } catch (erro) {
    return res.status(400).json({ erro: erro.message });
  }
}

function listar(req, res) {
  try {
    const pedidos = pedidoService.listarPedidos();
    return res.status(200).json(pedidos);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro interno no servidor.' });
  }
}

function buscarPorId(req, res) {
  try {
    const pedido = pedidoService.buscarPedidoPorId(req.params.id);
    return res.status(200).json(pedido);
  } catch (erro) {
    const status = erro.status || 500;
    return res.status(status).json({ erro: erro.message });
  }
}

function atualizarStatus(req, res) {
  try {
    const { status } = req.body;
    const pedidoAtualizado = pedidoService.atualizarStatus(req.params.id, status);
    return res.status(200).json(pedidoAtualizado);
  } catch (erro) {
    const status = erro.status || 500;
    return res.status(status).json({ erro: erro.message });
  }
}

module.exports = {
  criar,
  listar,
  buscarPorId,
  atualizarStatus
};