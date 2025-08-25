export const metadata = {
  title: "TrueFit Recruits",
  description: "AI-assisted athlete recruiting.",
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>TrueFit Recruits</h1>
          <p>Select a section to continue.</p>

          <div className="actions">
            <a className="btn btn-primary" href="/sports">Explore Sports</a>
            <a className="btn btn-outline" href="/about">About</a>
            <a className="btn btn-outline" href="/contact">Contact</a>
          </div>
        </div>
      </section>
    </main>
  );
}
