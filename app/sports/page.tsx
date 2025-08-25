export const metadata = {
  title: "Sports | TrueFit Recruits",
  description: "Choose a sport & division.",
};

export default function SportsIndexPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>TrueFit Recruits</h1>
      <p>Select a sport & division:</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Lacrosse</h2>
        <p>
          <a href="/sports/lacrosse/men">Men</a> ·{" "}
          <a href="/sports/lacrosse/women">Women</a>
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Football</h2>
        <p>
          <a href="/sports/football/men">Men</a>
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Soccer</h2>
        <p>
          <a href="/sports/soccer/men">Men</a> ·{" "}
          <a href="/sports/soccer/women">Women</a>
        </p>
      </section>
    </main>
  );
}


