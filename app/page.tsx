export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p>THE NEW</p>

          <h1>PUNCH</h1>

          <button>EXPLORE</button>
        </div>
      </section>

      <section id="overview" className="section">
        <h2>Overview</h2>

        <p>Discover the new Punch.</p>
      </section>

      <section id="design" className="section dark">
        <h2>Design</h2>

        <p>Bold design. Strong presence.</p>
      </section>

      <section id="safety" className="section">
        <h2>Safety</h2>

        <p>Designed with safety in mind.</p>
      </section>

      <section id="technology" className="section dark">
        <h2>Technology</h2>

        <p>Technology designed around you.</p>
      </section>

      <section id="performance" className="section">
        <h2>Performance</h2>

        <p>Experience the drive.</p>
      </section>
    </main>
  );
}