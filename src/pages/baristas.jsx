import navbar from "../components/navbar";
import footer from "../components/footer";

export default function Baristas() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 px-6 py-10">
        <a
          href="/index"
          className="text-yellow-600 hover:underline mb-6 inline-block"
        >
          ← Volver al tablero
        </a>
        <h1 className="text-3xl font-bold mb-4">Baristas</h1>
        <p className="text-gray-700">
          La gestión completa de baristas se encuentra en{" "}
          <code className="bg-gray-200 px-1 rounded">index.html</code>. Copia la
          estructura si quieres página independiente.
        </p>
      </main>
      <Footer />
    </>
  );
}
