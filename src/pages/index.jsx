function index() {
  const goToMenu = () => {
    window.location.href = "/menu";
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Navbar */}
      <div id="navbar-container"></div>

      {/* Banner principal */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://torontoforyou.com/wp-content/uploads/2024/08/cafes-cover-1920x1296.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">El Arte del Buen Café</h1>
          <p className="mt-2 text-lg">Café artesanal con aroma y tradición</p>
          <button
            onClick={goToMenu}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition"
          >
            Comprar Ahora
          </button>
        </div>
      </section>

      {/* Productos recomendados */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Recomendados</h2>
        <div
          id="productos-container"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Aquí se cargarán los productos dinámicamente */}
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="p-8 flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://torontoforyou.com/wp-content/uploads/2024/08/cafes-cover-1920x1296.jpg"
          alt="Cafetería KAFFA"
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Sobre Nosotros</h2>
          <p className="text-gray-700">
            En KAFFA nos apasiona el café artesanal. Seleccionamos granos de
            calidad premium y los transformamos en experiencias inolvidables
            para tus sentidos.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
          {/* Info empresa */}
          <div>
            <h3 className="text-xl font-bold mb-2">KAFFA Café</h3>
            <p className="text-gray-300 mb-4">
              El arte del buen café artesanal con aroma y tradición desde 2020.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" className="hover:text-green-500">Facebook</a>
              <a href="https://instagram.com" target="_blank" className="hover:text-green-500">Instagram</a>
              <a href="https://twitter.com" target="_blank" className="hover:text-green-500">Twitter</a>
              <a href="https://wa.me/573001234567" target="_blank" className="hover:text-green-500">WhatsApp</a>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-bold mb-2">Horarios</h3>
            <ul className="space-y-1 text-gray-300">
              <li><strong>Lunes - Viernes:</strong> 7:00 AM - 8:00 PM</li>
              <li><strong>Sábados:</strong> 8:00 AM - 9:00 PM</li>
              <li><strong>Domingos:</strong> 9:00 AM - 6:00 PM</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-2">Contacto</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📍 Calle 4 #2-80, Cafetería Kaffa Sena Centro Comercio y Servicio.</li>
              <li>📞 +57 300 123 4567</li>
              <li>✉️ info@kaffacafe.com</li>
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-2">Enlaces Rápidos</h3>
            <ul className="space-y-1 text-gray-300">
              <li><a href="/index" className="hover:text-green-500">Inicio</a></li>
              <li><a href="/menu" className="hover:text-green-500">Menú</a></li>
              <li><a href="/eventos" className="hover:text-green-500">Eventos</a></li>
              <li><a href="/sobre-nosotros" className="hover:text-green-500">Sobre Nosotros</a></li>
              <li><a href="/contactos" className="hover:text-green-500">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom text-center py-4 border-t border-gray-700">
          <p>&copy; 2025 KAFFA Café. Todos los derechos reservados. | Vive la experiencia KAFFA</p>
        </div>
      </footer>
    </div>
  );
}

export default index;