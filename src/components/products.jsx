export default function Products() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Recomendados</h2>
        <div id="productos-container" className="grid md:grid-cols-3 gap-8">
          {/* Aquí luego puedes mapear productos dinámicos desde props o API */}
        </div>
      </div>
    </section>
  );
}
