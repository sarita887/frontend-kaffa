export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Columna 1 */}
        <div>
          <h3 className="text-xl font-bold mb-2">KAFFA Café</h3>
          <p className="mb-4">El arte del buen café artesanal con aroma y tradición desde 2020.</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-400">FB</a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-400">IG</a>
            <a href="https://twitter.com" target="_blank" className="hover:text-blue-300">TW</a>
            <a href="https://wa.me/573001234567" target="_blank" className="hover:text-green-400">WA</a>
          </div>
        </div>
        {/* Columna 2 */}
        <div>
          <h3 className="text-xl font-bold mb-2">Horarios</h3>
          <ul className="space-y-2">
            <li><strong>Lunes - Viernes:</strong> 7:00 AM - 8:00 PM</li>
            <li><strong>Sábados:</strong> 8:00 AM - 9:00 PM</li>
            <li><strong>Domingos:</strong> 9:00 AM - 6:00 PM</li>
          </ul>
        </div>
        {/* Columna 3 */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contacto</h3>
          <ul className="space-y-2">
            <li>📍 Calle 4 #2-80, Cafetería Kaffa Sena Centro Comercio y Servicio</li>
            <li>📞 +57 300 123 4567</li>
            <li>✉️ info@kaffacafe.com</li>
          </ul>
        </div>
        {/* Columna 4 */}
        <div>
          <h3 className="text-xl font-bold mb-2">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li><a href="/index" className="hover:text-white">Inicio</a></li>
            <li><a href="/menu" className="hover:text-white">Menú</a></li>
            <li><a href="/eventos" className="hover:text-white">Eventos</a></li>
            <li><a href="/sobre-nosotros" className="hover:text-white">Sobre Nosotros</a></li>
            <li><a href="/contactos" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-gray-700 pt-6">
        <p>&copy; 2025 KAFFA Café. Todos los derechos reservados. | Vive la experiencia KAFFA</p>
      </div>
    </footer>
  );
}
