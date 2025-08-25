import Link from "next/link";

export const metadata = { title: "Sports | TrueFit Recruits" };

export default function SportsIndex() {
  const links = [
    { href: "/sports/football/men", label: "Men’s Football" },
    { href: "/sports/football/women", label: "Women’s Football" },
    { href: "/sports/lacrosse/men", label: "Men’s Lacrosse" },
    { href: "/sports/lacrosse/women", label: "Women’s Lacrosse" },
    { href: "/sports/soccer/men", label: "Men’s Soccer" },
    { href: "/sports/soccer/women", label: "Women’s Soccer" },
  ];

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Sports</h1>
      <ul>
        {links.map(l => (
          <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
        ))}
      </ul>
    </main>
  );
}
