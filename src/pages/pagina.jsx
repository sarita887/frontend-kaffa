import { useState } from "react";

function DashboardBarista() {
  const [active, setActive] = useState("perfil");

  const handleLogout = () => {
    alert("Sesión cerrada. Redirigiendo a la página de inicio...");
    window.location.href = "/index"; // Ajusta según tu ruta de login
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-8">Dashboard Barista</h2>
        <nav className="space-y-2">
          <button
            onClick={() => setActive("perfil")}
            className={`block w-full text-left px-4 py-2 rounded transition ${
              active === "perfil" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            👤 Ver Perfil
          </button>
          <button
            onClick={() => setActive("pedidos")}
            className={`block w-full text-left px-4 py-2 rounded transition ${
              active === "pedidos" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            📋 Mirar los Pedidos
          </button>
          <button
            onClick={() => setActive("chat")}
            className={`block w-full text-left px-4 py-2 rounded transition ${
              active === "chat" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            💬 Chat
          </button>
          <button
            onClick={() => setActive("caja")}
            className={`block w-full text-left px-4 py-2 rounded transition ${
              active === "caja" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            💰 Cierre de Caja
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 rounded transition hover:bg-red-600"
          >
            🚪 Cerrar Sesión
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-10">
        {active === "perfil" && (
          <>
            <h1 className="text-3xl font-bold mb-4">Bienvenido al Dashboard</h1>
            <p className="text-gray-700">
              Esta es la página principal donde se podría ver el perfil o un resumen del día.
            </p>
          </>
        )}
        {active === "pedidos" && <h1 className="text-2xl">Aquí iría la lista de pedidos</h1>}
        {active === "chat" && <h1 className="text-2xl">Aquí iría el chat</h1>}
        {active === "caja" && <h1 className="text-2xl">Aquí iría el cierre de caja</h1>}
      </main>
    </div>
  );
}

export default DashboardBarista;