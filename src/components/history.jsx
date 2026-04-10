export default function History() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        
        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
          <p className="mb-6">
            KAFFA nació del deseo de rescatar la tradición del café artesanal y renovarla con técnicas contemporáneas...
          </p>
          <h3 className="text-2xl font-semibold mb-2">¿Por qué KAFFA?</h3>
          <p>
            Porque creemos que el café es cultura. Nuestros proveedores son pequeños productores comprometidos...
          </p>
        </div>

        {/* Valores */}
        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Misión</h4>
            <p>Ofrecer experiencias memorables a través del café...</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Visión</h4>
            <p>Ser un referente local en café de especialidad...</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Valores</h4>
            <p>Calidad · Transparencia · Respeto por la tierra · Cercanía con la comunidad</p>
          </div>
        </div>
      </div>
    </section>
  );
}
