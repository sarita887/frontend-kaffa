import EventCard from "./EventCard";

export default function EventsSection() {
  const eventos = [
    {
      title: "SENA, protagonista en la Feria Internacional de Café, Cacao y Agroturismo",
      date: "Miércoles, 18 de septiembre de 2024",
      description: "En el evento, que mostró lo mejor de la caficultura y cacaocultura regional, participaron aprendices e instructores de Huila, Antioquia, Caldas, Cauca y Quindío.",
      image: "https://www.sena.edu.co/es-co/Noticias/PublishingImages/Neiva1-18924.jpeg"
    },
    {
      title: "El Cauca sabe a Café - 13ª Feria y Concurso de Cafés Especiales",
      description: "Gracias a la alianza entre Tecnicafe, Comité de Cafeteros Cauca y Mercy Corps Colombia, el SENA participará con instructores como jueces y aprendices competidores en Arte Latte, AeroPress y Brewers Cup.",
      image: "https://scontent.fclo9-1.fna.fbcdn.net/v/t39.30808-6/486831955_1089983839837796_974248402690324158_n.jpg",
      button: "Más información"
    }
  ];

  return (
    <section className="eventos">
      <h2 className="text-2xl font-bold mb-6">Próximos Eventos</h2>
      {eventos.map((e, i) => (
        <EventCard key={i} {...e} />
      ))}
    </section>
  );
}
