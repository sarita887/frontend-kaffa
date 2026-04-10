export default function OrderDetailModal({ open, onClose, order, updateStatus }) {
  if (!open || !order) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">
      <div className="bg-card rounded-xl shadow-lg p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl">✖</button>
        <h2 className="text-xl font-bold mb-4">Pedido {order.id}</h2>
        <p className="text-sm text-textlight mb-2">{order.items.join(", ")}</p>
        <p className="font-bold text-primary mb-4">{order.total}</p>
        <div className="space-y-2">
          <button onClick={() => updateStatus(order.id, "prep")} className="bg-blue-500 text-white w-full py-2 rounded">Marcar en Preparación</button>
          <button onClick={() => updateStatus(order.id, "ready")} className="bg-green-600 text-white w-full py-2 rounded">Marcar Entregado</button>
          <button onClick={() => updateStatus(order.id, "cancelado")} className="bg-red-600 text-white w-full py-2 rounded">Cancelar Pedido</button>
        </div>
      </div>
    </div>
  );
}
