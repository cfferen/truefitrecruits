"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header" style={{ padding: "1rem 2rem" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/sports">Sports</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
