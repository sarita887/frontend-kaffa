export default function BaristaSidebar({ setSection }) {
  return (
    <aside className="w-64 bg-secondary text-white flex flex-col p-6">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/20">
        <img
          src="https://ui-avatars.com/api/?name=Kaffa&background=fff&color=6b4c35&size=40"
          alt="logo"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <div>
          <b>KAFFA Admin</b>
          <br />
          <small className="opacity-70 text-xs">Panel de Control</small>
        </div>
      </div>
      <nav className="flex flex-col space-y-2">
        {["inicio","pedidos","productos","clientes","baristas","inventario","reportes","config"].map((sec)=>(
          <button key={sec} onClick={()=>setSection(sec)} className="px-3 py-2 rounded hover:bg-primary text-left">
            {sec.charAt(0).toUpperCase()+sec.slice(1)}
          </button>
        ))}
      </nav>
    </aside>
  );
}
