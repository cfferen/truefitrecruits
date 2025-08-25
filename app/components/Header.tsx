"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        {/* Brand / Logo */}
        <Link href="/" className="brand">
          <div className="brand-logo">TF</div>
          TrueFit Recruits
        </Link>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/sports">Sports</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
