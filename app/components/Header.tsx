"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand */}
        <div className="brand">
          {/* Keep the filename exactly as uploaded */}
          <img src="/logo.png.png" alt="TrueFit Recruits" />
          <span className="brand-name">TrueFit Recruits</span>
        </div>

        {/* Desktop nav */}
        <nav className="nav" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/sports">Sports</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile">
          <ul className="container" onClick={() => setOpen(false)}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sports">Sports</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
<nav style={{ display: "flex", gap: "1.5rem" }}>
  <Link href="/">Home</Link>
  <Link href="/sports">Sports</Link>
  <Link href="/schools">Schools</Link>  {/* <-- add this */}
  <Link href="/about">About</Link>
  <Link href="/contact">Contact</Link>
</nav>




