import React from "react";

function Navbar() {
  return (
    <nav className="bg-green-900 text-white px-6 py-4 flex justify-between items-center">
      <ul className="flex space-x-6 font-semibold">
        <li><a href="/" className="hover:text-yellow-400">Inicio</a></li>
        <li><a href="/menu" className="hover:text-yellow-400">Menú</a></li>
        <li><a href="/eventos" className="hover:text-yellow-400">Eventos</a></li>
        <li><a href="/sobre-nosotros" className="hover:text-yellow-400">Sobre Nosotros</a></li>
        <li><a href="/contactos" className="hover:text-yellow-400">Contactos</a></li>
      </ul>
      <div className="space-x-4">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md">
          Regístrese ahora
        </button>
        <button className="bg-white hover:bg-gray-200 text-green-900 px-4 py-2 rounded-md">
          Iniciar sesión
        </button>
      </div>
    </nav>
  );
}

export default Navbar;