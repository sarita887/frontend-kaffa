export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen shadow-lg p-6">
      <h2 className="text-center text-2xl font-bold mb-8">Dashboard Barista</h2>
      <nav className="space-y-4">
        <a href="/pagina" className="block px-4 py-2 rounded hover:bg-gray-700">👤 Ver Perfil</a>
        <a href="/pedidos" className="block px-4 py-2 rounded hover:bg-gray-700">📋 Mirar los Pedidos</a>
        <a href="/chat" className="block px-4 py-2 rounded hover:bg-gray-700">💬 Chat</a>
        <a href="/caja" className="block px-4 py-2 rounded hover:bg-gray-700">💰 Cierre de Caja</a>
        <a
          href="/index"
          onClick={(e) => {
            e.preventDefault();
            alert("Sesión cerrada. Redirigiendo a la página de inicio...");
            window.location.href = "/index";
          }}
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          🚪 Cerrar Sesión
        </a>
      </nav>
    </aside>
  );
}
