import navbar from "../components/navbar";
import eventsSection from "../components/EventsSection";
import footer from "../components/footer";

export default function EventosPage() {
  return (
    <div className="eventos-page">
      <Navbar />
      <main className="p-6">
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
}
