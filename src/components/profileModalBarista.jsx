import { useState } from "react";

export default function ProfileModalBarista({ open, onClose }) {
  const [name, setName] = useState("Barista");
  const [email, setEmail] = useState("barista@kaffa.com");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">
      <div className="bg-card rounded-xl shadow-lg p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl">✖</button>
        <h2 className="text-xl font-bold text-center mb-4">Editar Perfil</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Perfil actualizado: ${name}, ${email}`);
            onClose();
          }}
          className="space-y-3"
        >
          <div>
            <label className="block font-medium">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium">Correo</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button type="submit" className="bg-primary text-white w-full py-2 rounded">
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}
