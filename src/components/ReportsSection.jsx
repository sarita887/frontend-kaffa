export default function ReportsSection() {
  return (
    <div className="box">
      <h3>📊 Novedades de Baristas</h3>
      <div className="overflow-x-auto mt-4">
        <table className="w-full">
          <thead><tr><th>Barista</th><th>Mensaje</th><th>Fecha</th><th>Prioridad</th></tr></thead>
          <tbody><tr><td>Carlos Ruiz</td><td>Falta leche</td><td>Hoy, 10:00 AM</td><td><span className="tag r">Alta</span></td></tr></tbody>
        </table>
      </div>
    </div>
  );
}
