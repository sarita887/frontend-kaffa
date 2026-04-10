export default function OrdersList({ orders, onSelect }) {
  if (orders.length === 0) {
    return <p className="text-center p-6">No hay pedidos pendientes.</p>;
  }

  return (
    <div className="space-y-4">
      {orders.map((o) => (
        <div key={o.id} className="bg-card p-4 rounded-lg shadow border-l-4 border-yellow-500">
          <div className="flex justify-between items-center">
            <b>{o.id}</b>
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs">Pendiente</span>
          </div>
          <p className="text-sm text-textlight my-2">{o.items.join(", ")}</p>
          <div className="flex justify-between text-sm">
            <span className="text-textlight">{o.metodoPago}</span>
            <b className="text-primary">{o.total}</b>
          </div>
          <button onClick={() => onSelect(o)} className="bg-primary text-white w-full py-2 rounded mt-2">Ver Detalle</button>
        </div>
      ))}
    </div>
  );
}
