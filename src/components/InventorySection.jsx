export default function InventorySection() {
  return (
    <div className="box">
      <div className="flex justify-between items-center mb-4">
        <h3>📦 Inventario & Insumos</h3>
        <button className="btn">+ Nuevo Producto</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead><tr><th>ID</th><th>Nombre</th><th>Categoría</th><th>Cant.</th><th>Und.</th><th>Precio Compra</th><th>Proveedor</th><th>Estado</th><th>Acciones</th></tr></thead>
          <tbody id="tbP"></tbody>
        </table>
      </div>
    </div>
  );
}
