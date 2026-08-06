function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="container hero-content">
          <p className="hero-label">
            SHUL VENTURES PVT. LTD.
          </p>

          <h1>
            Are you searching for the solutions?
          </h1>

          <h2>
            WE deliver the Solutions in easy way
          </h2>

          <button className="hero-button" onClick={() => window.location.href = '/services'}>
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;