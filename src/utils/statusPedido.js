const status = {
  pendente: "Pedido pendente",
  aprovado: "Pedido aprovado",
  enviado: "Pedido enviado",
  entregue: "Pedido entregue",
};

export function rotuloDoStatus(statusPedido) {
  return status[statusPedido] ?? "Status desconhecido";
}
