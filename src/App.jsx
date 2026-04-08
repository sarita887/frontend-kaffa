function App() {

  const goToMenu = () => {
    alert("Ir al menú 🚀"); // luego lo conectamos con rutas
  };

  return (
    <div className="home-page">

      {/* BANNER */}
      <section className="banner">
        <div className="banner-overlay"></div>

        <div className="banner-text">
          <h1>El Arte del Buen Café</h1>
          <p>Café artesanal con aroma y tradición</p>
          <button className="btn" onClick={goToMenu}>
            Comprar Ahora
          </button>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="productos">
        <h2>Recomendados</h2>
        <div className="cards">
          {/* Aquí luego metemos productos dinámicos */}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <img
          src="https://torontoforyou.com/wp-content/uploads/2024/08/cafes-cover-1920x1296.jpg"
          alt="Cafetería KAFFA"
        />

        <div>
          <h2>Sobre Nosotros</h2>
          <p>
            En KAFFA nos apasiona el café artesanal. Seleccionamos granos de
            calidad premium y los transformamos en experiencias inolvidables
            para tus sentidos.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 KAFFA Café ☕</p>
      </footer>

    </div>
  );
}

export default App;
