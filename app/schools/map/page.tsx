'use client';

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import MapContainer so it works with SSR
const Map = dynamic(() => import('./components/Map'), { ssr: false });

export default function SchoolMapPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Map of Schools</h1>
      <Map />
    </div>
  );
}


