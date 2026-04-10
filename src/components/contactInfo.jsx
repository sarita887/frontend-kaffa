export default function ContactInfo() {
  return (
    <div className="grid md:grid-cols-3 gap-6 my-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h4 className="font-bold mb-2">Dirección</h4>
        <p>Calle 4 #2-80, Cafetería Kaffa Sena Centro Comercio y Servicio</p>
        <p>Popayán, Colombia</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h4 className="font-bold mb-2">Teléfono</h4>
        <p>+57 300 000 0000</p>
        <h4 className="font-bold mt-4 mb-2">Email</h4>
        <p>contacto@kaffa.com</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h4 className="font-bold mb-2">Horario</h4>
        <p>Lunes - Viernes: 8:00 a.m - 5:00 p.m</p>
        <p>Sábados: 8:00 a.m - 12:00 p.m</p>
        <p>Domingos y festivos cerrado</p>
      </div>
    </div>
  );
}
