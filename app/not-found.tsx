import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Page not found</h1>
      <p>Try the <Link href="/sports">Sports directory</Link> or head <Link href="/">Home</Link>.</p>
    </main>
  );
}
