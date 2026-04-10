export default function BaristaHeader({ title, openProfile }) {
  return (
    <header className="h-16 bg-card flex justify-between items-center px-6 shadow">
      <div className="flex items-center gap-4">
        <button className="hamburger">☰</button>
        <h1 className="text-lg font-bold text-primary">{title}</h1>
      </div>
      <div className="perfil cursor-pointer" onClick={openProfile}>
        <div className="text-right mr-2">
          <div className="font-bold text-sm">Admin User</div>
          <small className="text-gray-500">Administrador</small>
        </div>
        <img
          src="https://ui-avatars.com/api/?name=Admin&background=6b4c35&color=fff&size=40"
          alt="avatar"
          className="w-10 h-10 rounded-full border-2 border-primary"
        />
      </div>
    </header>
  );
}
