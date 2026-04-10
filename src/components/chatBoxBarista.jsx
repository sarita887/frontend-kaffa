import { useState } from "react";

export default function ChatBoxBarista() {
  const [messages, setMessages] = useState([
    { from: "cliente", text: "Hola, ¿mi pedido está listo?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { from: "barista", text: input }]);
    setInput("");
  };

  return (
    <div className="flex flex-col bg-card rounded-lg shadow h-full">
      <div className="bg-primary text-white font-bold p-4">Chat con Cliente</div>
      <div className="flex-1 bg-chatbg p-4 overflow-y-auto space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={`px-3 py-2 rounded-lg max-w-[70%] text-sm ${m.from === "barista" ? "bg-chatme self-end rounded-tr-none" : "bg-card self-start rounded-tl-none"}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2 p-4 border-t">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 border rounded-full px-4 py-2" placeholder="Escribe un mensaje..." />
        <button onClick={sendMessage} className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}
