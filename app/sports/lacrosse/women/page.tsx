export const metadata = { title: "Women’s Lacrosse Recruits | TrueFit Recruits" };

export default function WomensLacrossePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Women’s Lacrosse Recruits</h1>
      <p>Top women’s lacrosse prospects — highlights, stats, and profiles.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Featured Athletes</h2>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
          <div style={{ border: "1px solid #333", padding: "1rem", borderRadius: 8 }}>
            <h3>Athlete Name</h3>
            <p>Position: Attack</p>
            <p>Class of 2026</p>
          </div>
          <div style={{ border: "1px solid #333", padding: "1rem", borderRadius: 8 }}>
            <h3>Athlete Name</h3>
            <p>Position: Midfield</p>
            <p>Class of 2026</p>
          </div>
          <div style={{ border: "1px solid #333", padding: "1rem", borderRadius: 8 }}>
            <h3>Athlete Name</h3>
            <p>Position: Goalie</p>
            <p>Class of 2026</p>
          </div>
        </div>
      </section>
    </main>
  );
}

}
