import { useState } from "react";

export default function ProductModal({ open, onClose, product, addToCart }) {
  const [qty, setQty] = useState(1);
  const [notes, setNotes] = useState("");

  if (!open || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">
      <div className="bg-card rounded-xl shadow-lg p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl">✖</button>
        <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded mb-3" />
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-primary font-bold text-lg">${product.price.toFixed(2)}</p>
        <div className="flex items-center justify-center gap-4 my-4">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="bg-primary text-white w-8 h-8 rounded">-</button>
          <span className="font-bold text-lg">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="bg-primary text-white w-8 h-8 rounded">+</button>
        </div>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notas (ej. sin azúcar)" className="w-full border rounded p-2" />
        <button onClick={() => { addToCart({ ...product, qty, notes }); onClose(); }} className="bg-primary text-white w-full py-2 rounded mt-4">Agregar al Carrito</button>
      </div>
    </div>
  );
}
