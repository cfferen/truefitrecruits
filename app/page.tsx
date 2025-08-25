// app/page.tsx
import Link from "next/link";

export const metadata = {
  title: "TrueFit Recruits",
  description: "AI-assisted athlete recruiting. Launching soon.",
};

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>TrueFit Recruits</h1>
      <p>Select a section to continue:</p>

      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <Link href="/sports">Explore Sports</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </main>
  );
}
