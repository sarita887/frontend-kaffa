export default function BaristaSidebar({ setSection }) {
  return (
    <aside className="w-64 bg-secondary text-white flex flex-col p-6">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/20">
        <img
          src="https://ui-avatars.com/api/?name=Barista&background=fff&color=6b4c35"
          alt="logo"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-bold text-lg">KAFFA Barista</span>
      </div>
      <nav className="flex flex-col space-y-2">
        <button onClick={() => setSection("pedidos")} className="px-3 py-2 rounded hover:bg-primary">Pedidos</button>
        <button onClick={() => setSection("historial")} className="px-3 py-2 rounded hover:bg-primary">Historial</button>
        <button onClick={() => setSection("chat")} className="px-3 py-2 rounded hover:bg-primary">Chat</button>
        <button onClick={() => setSection("perfil")} className="px-3 py-2 rounded hover:bg-primary">Perfil</button>
      </nav>
    </aside>
  );
}
