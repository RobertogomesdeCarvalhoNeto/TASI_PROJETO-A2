let pedidos = [];
let proximoId = 1;

const TIPOS_VALIDOS = ['entrega', 'retirada'];
const PRIORIDADES_VALIDAS = ['baixa', 'normal', 'alta'];
const STATUS_VALIDOS = ['recebido', 'em_preparacao', 'enviado', 'entregue', 'cancelado'];

function criarPedido(dados) {
  const { cliente, tipo, valor, prioridade } = dados;

  if (!cliente || typeof cliente !== 'string' || cliente.trim() === '') {
    throw new Error('Cliente obrigatório e não pode ser vazio.');
  }

  if (typeof valor !== 'number' || valor <= 0) {
    throw new Error('O valor deve ser numérico e maior que zero.');
  }

  if (!tipo || !TIPOS_VALIDOS.includes(tipo)) {
    throw new Error(`Tipo inválido. Tipos validos: ${TIPOS_VALIDOS.join(', ')}.`);
  }

  if (!prioridade || !PRIORIDADES_VALIDAS.includes(prioridade)) {
    throw new Error(`Prioridade inválida. Prioridades validas: ${PRIORIDADES_VALIDAS.join(', ')}.`);
  }

  const novoPedido = {
    id: proximoId++,
    cliente: cliente.trim(),
    tipo,
    valor,
    prioridade,
    status: 'recebido'
  };

  pedidos.push(novoPedido);
  return novoPedido;
}

function listarPedidos() {
  return pedidos;
}

function buscarPedidoPorId(id) {
  const pedidoId = Number(id);
  const pedido = pedidos.find(p => p.id === pedidoId);
  
  if (!pedido) {
    const erro = new Error('Pedido não encontrado.');
    erro.status = 404;
    throw erro;
  }
  
  return pedido;
}

function atualizarStatus(id, novoStatus) {
  if (!novoStatus || !STATUS_VALIDOS.includes(novoStatus)) {
    const erro = new Error(`Status inválido. Status validos: ${STATUS_VALIDOS.join(', ')}.`);
    erro.status = 400;
    throw erro;
  }

  const pedido = buscarPedidoPorId(id);
  pedido.status = novoStatus;
  return pedido;
}

module.exports = {
  criarPedido,
  listarPedidos,
  buscarPedidoPorId,
  atualizarStatus,
  TIPOS_VALIDOS,
  PRIORIDADES_VALIDAS
};