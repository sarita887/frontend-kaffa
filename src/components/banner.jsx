export default function Banner() {
  return (
    <section className="relative h-[60vh] bg-cover bg-center" 
      style={{ backgroundImage: "url('https://amazonical.com/wp-content/uploads/2020/05/Granos-de-cafe-47009229_s.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Pasión, aroma y tradición en cada taza.
        </h1>
        <p className="mt-4 max-w-2xl">
          En KAFFA combinamos raíces artesanales con técnicas modernas para ofrecerte una experiencia única.
        </p>
      </div>
    </section>
  );
}
