import Link from "next/link";

export const metadata = {
  title: "Sports | TrueFit Recruits",
};

export default function SportsIndexPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Explore Sports</h1>
      <ul>
        <li><Link href="/sports/lacrosse/men">Men’s Lacrosse</Link></li>
        <li><Link href="/sports/lacrosse/women">Women’s Lacrosse</Link></li>
        <li><Link href="/sports/football/men">Men’s Football</Link></li>
        <li><Link href="/sports/soccer/men">Men’s Soccer</Link></li>
        <li><Link href="/sports/soccer/women">Women’s Soccer</Link></li>
      </ul>
    </main>
  );
}
