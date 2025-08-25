import Link from "next/link";

export const metadata = { title: "Men’s Football Recruits | TrueFit Recruits" };

export default function MensFootballPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 24 }}>
        <h1>Men’s Football Recruits</h1>
        <p>Discover football prospects with film, measurables, and academic context.</p>
      </header>

      <section style={{ marginBottom: 24 }}>
        <h2>Athlete Spotlights</h2>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <article style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 14 }}>
            <h3>Devin Brooks</h3>
            <p>WR · 4.5s 40yd · GPA 3.4</p>
            <Link href="#">View Highlights →</Link>
          </article>
          <article style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 14 }}>
            <h3>Tyler Green</h3>
            <p>LB · Bench 315 · GPA 3.5</p>
            <Link href="#">View Highlights →</Link>
          </article>
        </div>
      </section>

      <section>
        <h2>Get Involved</h2>
        <p>
          Athletes: <Link href="/login">create your profile</Link>.{" "}
          Coaches: <Link href="/login">log in</Link> to search by position, measurables, and film.
        </p>
      </section>
    </main>
  );
}
