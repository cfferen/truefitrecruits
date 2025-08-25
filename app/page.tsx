// app/page.tsx
export const metadata = {
  title: 'TrueFit Recruits',
  description: 'AI-assisted athlete recruiting. Launching soon.',
};

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>TrueFit Recruits</h1>
      <p>Select a sport & division on the Sports page.</p>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <a href="/sports">Explore Sports</a>
        <a href="/about">About</a>
      </div>
    </main>
  );
}

