export default function AboutPreview() {
  return (
    <section className="py-16 bg-white grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
      <img 
        src="https://torontoforyou.com/wp-content/uploads/2024/08/cafes-cover-1920x1296.jpg" 
        alt="Cafetería KAFFA" 
        className="w-full h-80 object-cover rounded-lg shadow-md"
      />
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
        <p className="text-gray-600">
          Conoce más sobre nuestra pasión por el café artesanal y cómo combinamos tradición con técnicas modernas.
        </p>
        <a href="/sobre-nosotros" className="mt-6 inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
          Leer Más
        </a>
      </div>
    </section>
  );
}
