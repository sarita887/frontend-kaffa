import contactInfo from "./contactInfo";

export default function ContactPage() {
  return (
    <section className="px-6 py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-4">Contáctanos</h2>
      <p className="text-center text-gray-700 mb-2">
        ¿Te gustaría saber más sobre nuestra cafetería, dejar una sugerencia o simplemente saludarnos?
      </p>
      <p className="text-center text-gray-700 mb-8">
        Estamos aquí para servirte siempre el mejor café ☕
      </p>

      {/* Tarjetas de información */}
      <ContactInfo />

      {/* Mapa */}
      <div className="flex justify-center my-8">
        <img
          src="../imagenes/Captura de pantalla 2025-11-06 002202.png"
          alt="Mapa ubicación"
          className="rounded-lg shadow-md max-w-full"
        />
      </div>

      {/* Redes sociales */}
      <div className="text-center mt-10">
        <h3 className="text-2xl font-bold mb-4">¡Síguenos!</h3>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-yellow-600 hover:underline">Facebook</a>
          <a href="#" className="text-yellow-600 hover:underline">Instagram</a>
          <a href="#" className="text-yellow-600 hover:underline">TikTok</a>
        </div>
      </div>
    </section>
  );
}
