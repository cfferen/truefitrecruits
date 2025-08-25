import "./globals.css";
import Header from "./components/Header";
import Link from "next/link";

export const metadata = {
  title: "TrueFit Recruits",
  description: "AI-assisted athlete recruiting platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
        }}
      >
        {/* Header */}
        <Header />

        {/* Main content */}
        <main style={{ flex: 1 }}>{children}</main>

        {/* Footer */}
        <footer
          style={{
            background: "#0d1117",
            color: "#fff",
            padding: "1.5rem",
            textAlign: "center",
          }}
        >
          <p>© {new Date().getFullYear()} TrueFit Recruits</p>
          <nav style={{ marginTop: "0.75rem", display: "flex", gap: "1.5rem", justifyContent: "center" }}>
            <Link href="/sports">Sports</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div style={{ marginTop: "0.75rem", fontSize: "0.9rem", opacity: 0.8 }}>
            <span>Follow us: </span>
            <a href="#" style={{ marginLeft: "0.5rem" }}>Twitter</a> | 
            <a href="#" style={{ marginLeft: "0.5rem" }}>Instagram</a> | 
            <a href="#" style={{ marginLeft: "0.5rem" }}>LinkedIn</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
