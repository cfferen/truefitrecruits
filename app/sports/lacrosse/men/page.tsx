import Link from "next/link";

export const metadata = { title: "Men’s Lacrosse Recruits | TrueFit Recruits" };

export default function MensLacrossePage() {
  return (
    <main style={{ padding: "2rem", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 24 }}>
        <h1>Men’s Lacrosse Recruits</h1>
        <p>Explore standout men’s lacrosse athletes, film, and recruiting resources.</p>
      </header>

      <section style={{ marginBottom: 24 }}>
        <h2>Athlete Spotlights</h2>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <article style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 14 }}>
            <h3>John Smith</h3>
            <p>Defense · GPA 3.8</p>
            <Link href="#">View Highlights →</Link>
          </article>
          <article style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 14 }}>
            <h3>Alex Johnson</h3>
            <p>Midfield · GPA 3.6</p>
            <Link href="#">View Highlights →</Link>
          </article>
        </div>
      </section>

      <section>
        <h2>Get Involved</h2>
        <p>
          Athletes: <Link href="/login">create your profile</Link>.{" "}
          Coaches: <Link href="/login">log in</Link> to access player data and evaluations.
        </p>
      </section>
    </main>
  );
}
