'use client';

import { useEffect, useState } from 'react';

interface Athlete {
  id: number;
  name: string;
  sport: string;
  position: string;
  team: string;
  height: string;
  weight: string;
  gradYear: number;
  highlightsUrl: string;
}

export default function FootballAthletes() {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAthletes() {
      try {
        const res = await fetch('/data/athletes.json');
        if (!res.ok) throw new Error('Failed to load athlete data');
        const data = await res.json();

        const footballPlayers = data.filter((a: Athlete) => a.sport === 'Football');
        setAthletes(footballPlayers);
      } catch (err: any) {
        console.error(err);
        setError('Could not load athlete data. Please try again later.');
      }
    }

    fetchAthletes();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (athletes.length === 0) {
    return <div>Loading athletes...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Football Athletes</h1>
      <ul className="space-y-4">
        {athletes.map((athlete) => (
          <li key={athlete.id} className="border p-4 rounded-md shadow">
            <h2 className="text-xl font-semibold">{athlete.name}</h2>
            <p>Position: {athlete.position}</p>
            <p>Team: {athlete.team}</p>
            <p>Graduation Year: {athlete.gradYear}</p>
            <a href={athlete.highlightsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Watch Highlights
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}



