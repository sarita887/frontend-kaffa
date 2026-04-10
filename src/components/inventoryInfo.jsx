export default function InventoryInfo() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <a 
        href="/index" 
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Volver al tablero
      </a>
      <h1 className="text-3xl font-bold mb-4">Inventario</h1>
      <p className="text-gray-600">
        La gestión de inventario está implementada en el dashboard principal (index.html).
      </p>
    </section>
  );
}
