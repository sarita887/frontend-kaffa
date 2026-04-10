export default function BaristaHeader({ openProfile }) {
  return (
    <header className="h-16 bg-card flex justify-between items-center px-6 shadow">
      <h2 className="text-lg font-bold text-primary">Dashboard Barista</h2>
      <div className="flex items-center gap-6">
        <div className="cursor-pointer" onClick={openProfile}>
          <img
            src="https://ui-avatars.com/api/?name=Barista"
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-primary"
          />
        </div>
      </div>
    </header>
  );
}
