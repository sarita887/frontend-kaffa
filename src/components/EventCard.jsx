export default function EventCard({ title, date, description, image, button }) {
  return (
    <div className="event-card bg-white shadow rounded-lg p-4 mb-6">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-3" />
      <div className="evento-info">
        {date && <h5 className="text-sm text-gray-600 mb-2">{date}</h5>}
        <p className="text-gray-700 mb-3">{description}</p>
        {button && <button className="btn bg-primary text-white px-4 py-2 rounded">{button}</button>}
      </div>
    </div>
  );
}
