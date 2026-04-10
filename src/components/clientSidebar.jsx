export default function ClientSidebar({ setSection }) {
  return (
    <aside className="w-64 bg-secondary text-white flex flex-col p-6">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/20">
        <img
          src="https://ui-avatars.com/api/?name=Kaffa&background=fff&color=6b4c35"
          alt="logo"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-bold text-lg">KAFFA</span>
      </div>
      <nav className="flex flex-col space-y-2">
        <button onClick={() => setSection("menu")} className="px-3 py-2 rounded hover:bg-primary">Menú</button>
        <button onClick={() => setSection("pedidos")} className="px-3 py-2 rounded hover:bg-primary">Mis Pedidos</button>
        <button onClick={() => setSection("chat")} className="px-3 py-2 rounded hover:bg-primary">Chat Barista</button>
      </nav>
    </aside>
  );
}
