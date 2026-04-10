export default function Hero() {
  return (
    <section className="relative h-[70vh] bg-cover bg-center" 
      style={{ backgroundImage: "url('https://torontoforyou.com/wp-content/uploads/2024/08/cafes-cover-1920x1296.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">El Arte del Buen Café</h1>
        <p className="mt-4 text-lg md:text-xl">Café artesanal con aroma y tradición</p>
        <button 
          onClick={() => window.location.href="/menu"} 
          className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
          Comprar Ahora
        </button>
      </div>
    </section>
  );
}
