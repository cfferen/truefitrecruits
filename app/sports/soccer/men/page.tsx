import Link from "next/link";

export const metadata = { title: "Men’s Soccer Recruits | TrueFit Recruits" };

export default function MensSoccerPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 24 }}>
        <h1>Men’s Soccer Recruits</h1>
        <p>Browse men’s soccer prospects with clips, club history, and academic info.</p>
      </header>

      <section style={{ marginBottom: 24 }}>
        <h2>Athlete Spotlights</h2>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <article style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 14 }}>
            <h3>Luis Martinez</h3>
            <p>Forward · Club: Bay United · GPA 3.7</p>
            <Link href="#">View Highlights →</Link>
          </article>
          <article style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 14 }}>
            <h3>Owen Patel</h3>
            <p>Keeper · Clean sheets: 8 · GPA 3.6</p>
            <Link href="#">View Highlights →</Link>
          </article>
        </div>
      </section>

      <section>
        <h2>Get Involved</h2>
        <p>
          Athletes: <Link href="/login">create your profile</Link>.{" "}
          Coaches: <Link href="/login">log in</Link> to filter by position, club, and metrics.
        </p>
      </section>
    </main>
  );
}
