import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{
      backgroundColor: '#002366', // royal blue
      color: '#FFD700', // gold
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <Image
        src="/logo.png"
        alt="TrueFit Recruits Logo"
        width={200}
        height={200}
        priority
      />
      <h1 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>TrueFit Recruits</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        AI-powered recruiting insights. Discover, connect, and elevate athlete potential.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/sports">
          <button style={buttonStyle}>Explore Sports</button>
        </Link>
        <Link href="/schools">
          <button style={buttonStyle}>School Directory</button>
        </Link>
        <Link href="/about">
          <button style={buttonStyle}>About Us</button>
        </Link>
        <Link href="/contact">
          <button style={buttonStyle}>Contact</button>
        </Link>
      </div>
    </main>
  );
}

const buttonStyle = {
  backgroundColor: '#FFD700',
  color: '#002366',
  padding: '0.75rem 1.5rem',
  fontWeight: 'bold',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};
