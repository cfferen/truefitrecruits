import Link from "next/link";

export const metadata = {
  title: "Sports | TrueFit Recruits",
  description: "Browse sports and divisions.",
};

export default function SportsIndexPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Sports</h1>
      <p>Select a sport & division:</p>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Lacrosse</h2>
        <p>
          <Link href="/sports/lacrosse/men">Men</Link>
          {" · "}
          <Link href="/sports/lacrosse/women">Women</Link>
        </p>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Football</h2>
        <p>
          <Link href="/sports/football/men">Men</Link>
        </p>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Soccer</h2>
        <p>
          <Link href="/sports/soccer/men">Men</Link>
          {" · "}
          <Link href="/sports/soccer/women">Women</Link>
        </p>
      </section>
    </main>
  );
}

