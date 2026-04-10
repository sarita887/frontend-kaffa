export default function MenuCategory({ title, items }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.price}</p>
            <button
              onClick={() => (window.location.href = "/login")}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
