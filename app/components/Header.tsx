"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="site-header"
      style={{
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#0d1117", // dark background
      }}
    >
      {/* Left side: Logo + Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <img
          src="/logo.png.png"
          alt="TrueFit Recruits Logo"
          style={{ height: "50px" }}
        />
        <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>
          TrueFit Recruits
        </span>
      </div>

      {/* Right side: Navigation */}
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <Link href="/">Home</Link>
        <Link href="/sports">Sports</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}


