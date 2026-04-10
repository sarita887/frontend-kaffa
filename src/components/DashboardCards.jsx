export default function DashboardCards() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <div className="card"><h3>Ingresos Hoy</h3><div className="card-val">$1,250</div><div className="text-green">▲ 5% vs ayer</div></div>
        <div className="card"><h3>Pedidos</h3><div className="card-val">89</div><div className="text-red">▼ 1% vs ayer</div></div>
        <div className="card"><h3>Clientes Nuevos</h3><div className="card-val">32</div><div className="text-green">▲ 10% vs ayer</div></div>
        <div className="card"><h3>Ticket Promedio</h3><div className="card-val">$14.04</div><div className="text-green">▲ $0.50</div></div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="box"><h3>Ingresos Semanales</h3><canvas id="salesChart"></canvas></div>
        <div className="box"><h3>Top Productos</h3><canvas id="productsChart"></canvas></div>
      </div>
    </div>
  );
}
