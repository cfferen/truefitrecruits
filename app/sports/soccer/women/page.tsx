import Link from "next/link";

export const metadata = { title: "Women’s Soccer Recruits | TrueFit Recruits" };

export default function WomensSoccerPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 24 }}>
        <h1>Women’s Soccer Recruits</h1>
        <p>Explore women’s soccer athletes, highlight video, and recruiting resources.</p>
      </header>

      <section style={{ marginBottom: 24 }}>
        <h2>Athlete Spotlights</h2>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <article style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 14 }}>
            <h3>Sophia Nguyen</h3>
            <p>Midfield · Club: Metro FC · GPA 3.9</p>
            <Link href="#">View Highlights →</Link>
          </article>
          <article style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 14 }}>
            <h3>Harper Lee</h3>
            <p>Defender · 1v1 win %: 72 · GPA 3.8</p>
            <Link href="#">View Highlights →</Link>
          </article>
        </div>
      </section>

      <section>
        <h2>Get Involved</h2>
        <p>
          Athletes: <Link href="/login">create your profile</Link>.{" "}
          Coaches: <Link href="/login">log in</Link> for search and evaluation tools.
        </p>
      </section>
    </main>
  );
}
