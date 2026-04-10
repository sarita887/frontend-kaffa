export default function ProductGrid({ products, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id} className="bg-card p-4 rounded-lg shadow text-center hover:-translate-y-1 transition">
          <img src={p.img} alt={p.name} className="w-full h-32 object-cover rounded mb-3" />
          <h4 className="font-semibold">{p.name}</h4>
          <p className="text-primary font-bold">${p.price.toFixed(2)}</p>
          <button onClick={() => onSelect(p)} className="bg-primary text-white px-4 py-2 rounded mt-2 w-full">Ver</button>
        </div>
      ))}
    </div>
  );
}
