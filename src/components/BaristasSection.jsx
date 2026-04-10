export default function BaristasSection() {
  return (
    <div className="box">
      <div className="flex justify-between items-center mb-4">
        <h3>👥 Gestionar Baristas</h3>
        <button className="btn">+ Agregar Barista</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead><tr><th>Nombre</th><th>Usuario</th><th>Turno</th><th>Fecha Reg.</th><th>Estado</th><th>Acciones</th></tr></thead>
          <tbody id="tbB"></tbody>
        </table>
      </div>
    </div>
  );
}
