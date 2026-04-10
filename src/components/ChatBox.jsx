export default function ChatBox() {
  return (
    <div className="box">
      <h3>💬 Chat de Soporte</h3>
      <div className="border p-4 h-64 overflow-y-auto bg-gray-50">
        <p><strong>Barista:</strong> ¡Hola! ¿En qué puedo ayudarte hoy?</p>
        <p><strong>Tú:</strong> Quiero saber el estado de mi pedido.</p>
      </div>
      <div className="flex mt-3">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          className="flex-1 border rounded px-3 py-2"
        />
        <button className="btn ml-2">Enviar</button>
      </div>
    </div>
  );
}
