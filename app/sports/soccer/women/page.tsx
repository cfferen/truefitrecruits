import Link from 'next/link';
import athletes from '@/public/data/athletes.json';

export const metadata = { title: "Women’s Soccer Recruits | TrueFit Recruits" };

export default function WomensSoccerPage() {
  const filteredAthletes = athletes.filter(
    (a) => a.sport === 'soccer' && a.gender === 'women'
  );

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Women’s Soccer Recruits</h1>
      <p>Discover standouts, film, and stats for women’s soccer prospects.</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Featured Athletes</h2>
        <div style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
        }}>
          {filteredAthle
