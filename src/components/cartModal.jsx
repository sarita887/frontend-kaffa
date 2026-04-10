export default function CartModal({ open, onClose, cart, onConfirm }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">
      <div className="bg-card rounded-xl shadow-lg p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl">✖</button>
        <h2 className="text-xl font-bold mb-4">Tu Carrito</h2>
        <div className="max-h-64 overflow-y-auto mb-4">
          {cart.length === 0 ? <p className="text-center">Vacío</p> : cart.map((item, i) => (
            <div key={i} className="flex justify-between border-b py-2">
              <span>{item.name} x{item.qty}</span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <h3 className="text-right font-bold">Total: ${total.toFixed(2)}</h3>
        <button onClick={onConfirm} className="bg-green-600 text-white w-full py-2 rounded mt-4">Confirmar Compra</button>
      </div>
    </div>
  );
}
