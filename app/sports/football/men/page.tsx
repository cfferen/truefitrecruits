import Link from 'next/link';
import athletes from '@/public/data/athletes.json';

export const metadata = { title: "Men’s Football Recruits | TrueFit Recruits" };

export default function MensFootballPage() {
  const filteredAthletes = athletes.filter(
    (a) => a.sport === 'football' && a.gender === 'men'
  );

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Men’s Football Recruits</h1>
      <p>Discover standouts, film, and stats for men’s football prospects.</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Featured Athletes</h2>
        <div style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
        }}>
          {filteredAthletes.map((athlete) => (
            <div
              key={athlete.id}
              style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}
            >
              <h3>{athlete.name}</h3>
              <p><strong>Position:</strong> {athlete.position}</p>
              <p><strong>Class of:</strong> {athlete.gradYear}</p>
              <Link href={`/sports/football/men/${athlete.id}`}>
                <strong>View Profile →</strong>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


