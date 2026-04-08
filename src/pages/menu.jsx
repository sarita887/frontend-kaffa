function Menu() {
  const goToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Contenido principal */}
      <main className="flex-grow p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Nuestro Menú</h2>

        {/* Categoría: Cafés */}
        <h3 className="text-2xl font-semibold mt-6 mb-4">Cafés</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src="https://manualdecocina.com/wp-content/uploads/2024/03/Capuchino.jpg"
              alt="Capuchino"
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-bold">Capuchino</h3>
            <p className="text-gray-600">$8.000</p>
            <button
              onClick={goToLogin}
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Comprar
            </button>
          </div>
          {/* Repite el mismo patrón para Latte, Mocha, Americano */}
        </div>

        {/* Categoría: Postres */}
        <h3 className="text-2xl font-semibold mt-6 mb-4">Postres</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ejemplo: Brownie */}
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.j25X47euW79mU8V5F_AXBgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Brownie"
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-bold">Brownie</h3>
            <p className="text-gray-600">$6.000</p>
            <button
              onClick={goToLogin}
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Comprar
            </button>
          </div>
          {/* Repite para Cheesecake y Tiramisú */}
        </div>

        {/* Categoría: Snacks */}
        <h3 className="text-2xl font-semibold mt-6 mb-4">Snacks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ejemplo: Sándwich Club */}
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/24/0/ZB0202H_classic-american-grilled-cheese_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371603614279.jpeg"
              alt="Sándwich Club"
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-bold">Sándwich Club</h3>
            <p className="text-gray-600">$10.000</p>
            <button
              onClick={goToLogin}
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Comprar
            </button>
          </div>
          {/* Repite para Croissant y Bagel */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
          {/* Columna 1: Info empresa */}
          <div>
            <h3 className="text-xl font-bold mb-2">KAFFA Café</h3>
            <p className="text-gray-300 mb-4">
              El arte del buen café artesanal con aroma y tradición desde 2020.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" className="hover:text-green-500">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" className="hover:text-green-500">
                Instagram
              </a>
              <a href="https://twitter.com" target="_blank" className="hover:text-green-500">
                Twitter
              </a>
              <a href="https://wa.me/573001234567" target="_blank" className="hover:text-green-500">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Columna 2: Horarios */}
          <div>
            <h3 className="text-xl font-bold mb-2">Horarios</h3>
            <ul className="space-y-1 text-gray-300">
              <li><strong>Lunes - Viernes:</strong> 7:00 AM - 8:00 PM</li>
              <li><strong>Sábados:</strong> 8:00 AM - 9:00 PM</li>
              <li><strong>Domingos:</strong> 9:00 AM - 6:00 PM</li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-2">Contacto</h3>
            <ul className="space-y-1 text-gray-300">
              <li>📍 Calle 4 #2-80, Cafetería Kaffa Sena Centro Comercio y Servicio.</li>
              <li>📞 +57 300 123 4567</li>
              <li>✉️ info@kaffacafe.com</li>
            </ul>
          </div>

          {/* Columna 4: Enlaces rápidos */}
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

        <div className="bg-gray-800 text-center py-4">
          <p>&copy; 2025 KAFFA Café. Todos los derechos reservados. | Vive la experiencia KAFFA</p>
        </div>
      </footer>
    </div>
  );
}

export default Menu;