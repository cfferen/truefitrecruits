"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav className="nav-menu">
      <ul>
        <li><Link href="/sports/lacrosse/men">Men’s Lacrosse</Link></li>
        <li><Link href="/sports/lacrosse/women">Women’s Lacrosse</Link></li>
        <li><Link href="/sports/football/men">Men’s Football</Link></li>
        <li><Link href="/sports/soccer/men">Men’s Soccer</Link></li>
        <li><Link href="/sports/soccer/women">Women’s Soccer</Link></li>
      </ul>
    </nav>
  );
}
