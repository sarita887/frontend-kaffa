export default function Team() {
  const teamMembers = [
    {
      name: "María González",
      role: "Jefa de Baristas",
      img: "https://img.freepik.com/foto-gratis/barista-profesional-trabajo-cafe_176532-11596.jpg",
    },
    {
      name: "Andrés Rivera",
      role: "Tostador / Catador",
      img: "https://th.bing.com/th/id/R.5515c12d795c758e71b3768428189417?rik=EDJxiU67uyAuxQ&pid=ImgRaw&r=0",
    },
    {
      name: "Laura Méndez",
      role: "Experta en Métodos",
      img: "https://excelso77.com/wp-content/uploads/2024/02/que-hace-un-barista-profesional-te-lo-contamos-a-detalle.webp",
    },
    {
      name: "Carlos R.",
      role: "Atención al Cliente",
      img: "https://www.emcebar.org.mx/storage/2024/11/43b1ceec3e969edfbfb2c2e93dfca92a.webp",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
        <p className="text-gray-600 mb-10">
          Un grupo de baristas y apasionados que traen KAFFA a la vida
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 shadow-md rounded-lg p-4">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
