export const metadata = { title: "TrueFit Recruits" };

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>TrueFit Recruits</h1>
      <p>Select a sport & division:</p>

      <section style={{ display: "grid", gap: "1rem" }}>
        <div>
          <h2>Lacrosse</h2>
          <a href="/sports/lacrosse/men">Men</a> ·{" "}
          <a href="/sports/lacrosse/women">Women</a>
        </div>

        <div>
          <h2>Football</h2>
          <a href="/sports/football/men">Men</a>
          {/* Football (women) omitted by design */}
        </div>

        <div>
          <h2>Soccer</h2>
          <a href="/sports/soccer/men">Men</a> ·{" "}
          <a href="/sports/soccer/women">Women</a>
        </div>
      </section>
    </main>
  );
}
