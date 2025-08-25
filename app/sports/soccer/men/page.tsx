export const metadata = { title: "Men’s Soccer Recruits | TrueFit Recruits" };

export default function MensSoccerPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Men’s Soccer Recruits</h1>
      <p>Men’s soccer prospects with match film, stats, and contact details.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Featured Athletes</h2>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
          <div style={{ border: "1px solid #333", padding: "1rem", borderRadius: 8 }}>
            <h3>Athlete Name</h3>
            <p>Position: Forward</p>
            <p>Class of 2026</p>
          </div>
          <div style={{ border: "1px solid #333", padding: "1rem", borderRadius: 8 }}>
            <h3>Athlete Name</h3>
            <p>Position: Midfielder</p>
            <p>Class of 2026</p>
          </div>
          <div style={{ border: "1px solid #333", padding: "1rem", borderRadius: 8 }}>
            <h3>Athlete Name</h3>
            <p>Position: Defender</p>
            <p>Class of 2026</p>
          </div>
        </div>
      </section>
    </main>
  );
}
