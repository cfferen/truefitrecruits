import Link from "next/link";

export const metadata = { title: "Women’s Lacrosse Recruits | TrueFit Recruits" };

export default function WomensLacrossePage() {
  return (
    <main style={{ padding: "2rem", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 24 }}>
        <h1>Women’s Lacrosse Recruits</h1>
        <p>Find rising women’s lacrosse athletes and explore their highlight reels.</p>
      </header>

      <section style={{ marginBottom: 24 }}>
        <h2>Athlete Spotlights</h2>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <article style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 14 }}>
            <h3>Mia Carter</h3>
            <p>Attack · GPA 3.9</p>
            <Link href="#">View Highlights →</Link>
          </article>
          <article style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 14 }}>
            <h3>Riley Thompson</h3>
            <p>Goalie · GPA 3.7</p>
            <Link href="#">View Highlights →</Link>
          </article>
        </div>
      </section>

      <section>
        <h2>Get Involved</h2>
        <p>
          Athletes: <Link href="/login">create your profile</Link>.{" "}
          Coaches: <Link href="/login">log in</Link> for advanced filtering and evaluations.
        </p>
      </section>
    </main>
  );
}
