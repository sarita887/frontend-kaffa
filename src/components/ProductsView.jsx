export default function ProductsView() {
  return (
    <div className="box">
      <h3>☕ Catálogo Público</h3>
      <p className="text-gray-500 mt-2">Vista de productos tal como aparecen en la App del cliente.</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="card text-center"><div className="text-4xl">☕</div><h4>Capuchino</h4><p>$4.50</p></div>
        <div className="card text-center"><div className="text-4xl">🥐</div><h4>Croissant</h4><p>$3.00</p></div>
      </div>
    </div>
  );
}
