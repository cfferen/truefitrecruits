export const metadata = {
  title: "TrueFit Recruits",
  description: "AI-assisted athlete recruiting. Launching soon.",
};

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>TrueFit Recruits</h1>
      <p>Select a section to continue:</p>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <a href="/sports">Explore Sports</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </main>
  );
}
