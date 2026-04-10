export default function OrdersSection() {
  return (
    <div className="box">
      <h3>📋 Mis Pedidos</h3>
      <div className="overflow-x-auto mt-4">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th>ID</th>
              <th>Producto</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#001</td>
              <td>Capuchino</td>
              <td>08/04/2026</td>
              <td><span className="text-green-600">Entregado</span></td>
            </tr>
            <tr>
              <td>#002</td>
              <td>Croissant</td>
              <td>08/04/2026</td>
              <td><span className="text-yellow-600">En preparación</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
