export const metadata = { title: "Men’s Football Recruits | TrueFit Recruits" };

export default function MensFootballPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Men’s Football Recruits</h1>
      <p>Discover standouts, film, and stats for men’s football prospects.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Featured Athletes</h2>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
            <h3>Athlete Name</h3>
            <p>Position: QB</p>
            <p>Class of 2026</p>
          </div>
          <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
            <h3>Athlete Name</h3>
            <p>Position: RB</p>
            <p>Class of 2026</p>
          </div>
          <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
            <h3>Athlete Name</h3>
            <p>Position: WR</p>
            <p>Class of 2026</p>
          </div>
        </div>
      </section>
    </main>
  );
}

