export default function Hero() {
  return (
    <section
      style={{
        padding: "4rem 1.5rem",
        textAlign: "center",
        display: "grid",
        placeItems: "center",
        gap: "1rem",
      }}
    >
      {/* If you renamed your logo to /logo.png, change the src below */}
      <img
        src="/logo.png.png"
        alt="TrueFit Recruits"
        style={{ width: 140, height: "auto", display: "block", margin: "0 auto 0.5rem" }}
      />
      <h1 style={{ margin: 0 }}>TrueFit Recruits</h1>
      <p style={{ opacity: 0.9, margin: 0 }}>
        AI-assisted athlete recruiting across Lacrosse, Football, and Soccer.
      </p>

      <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a href="/sports" style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: "10px 16px", textDecoration: "none" }}>
          Explore Sports
        </a>
        <a href="/about" style={{ border: "1px solid #e5e7eb33", borderRadius: 10, padding: "10px 16px", textDecoration: "none" }}>
          About
        </a>
        <a href="/contact" style={{ border: "1px solid #e5e7eb33", borderRadius: 10, padding: "10px 16px", textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </section>
  );
}
