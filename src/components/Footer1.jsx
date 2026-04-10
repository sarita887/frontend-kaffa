export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-10 p-6">
      <div className="grid md:grid-cols-4 gap-6 footer-content">
        <div>
          <h3 className="font-bold">KAFFA Café</h3>
          <p>El arte del buen café artesanal con aroma y tradición desde 2020.</p>
        </div>
        <div>
          <h3 className="font-bold">Horarios</h3>
          <ul>
            <li>Lunes - Viernes: 7:00 AM - 8:00 PM</li>
            <li>Sábados: 8:00 AM - 9:00 PM</li>
            <li>Domingos: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Contacto</h3>
          <p>📍 Calle 4 #2-80, Cafetería Kaffa Sena Centro Comercio y Servicio.</p>
          <p>📞 +57 300 123 4567</p>
          <p>✉️ info@kaffacafe.com</p>
        </div>
        <div>
          <h3 className="font-bold">Enlaces Rápidos</h3>
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="menu.html">Menú</a></li>
            <li><a href="eventos.html">Eventos</a></li>
            <li><a href="sobre_nosotros.html">Sobre Nosotros</a></li>
            <li><a href="contactos.html">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; 2025 KAFFA Café. Todos los derechos reservados. | Vive la experiencia KAFFA</p>
      </div>
    </footer>
  );
}
