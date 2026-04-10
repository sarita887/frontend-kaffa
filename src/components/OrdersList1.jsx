export default function OrdersList() {
  return (
    <div className="box">
      <div className="flex justify-between items-center mb-4">
        <h3>📋 Últimos Pedidos</h3>
        <button className="btn">📥 Exportar</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr><th>ID Pedido</th><th>Cliente</th><th>Productos</th><th>Total</th><th>Estado</th><th>Acciones</th></tr>
          </thead>
          <tbody id="tbPedidos"></tbody>
        </table>
      </div>
    </div>
  );
}
