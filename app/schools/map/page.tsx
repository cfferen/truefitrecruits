"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

type School = {
  id: string;
  name: string;
  city: string;
  state: string;
  division: string;
  governingBody: string;
  conference?: string;
  sports: string[];
  lat?: number;
  lng?: number;
};

export default function SchoolMapPage() {
  const [schools, setSchools] = useState<School[]>([]);

  useEffect(() => {
    fetch("/data/schools.json")
      .then((r) => r.json())
      .then((data: School[]) => setSchools(data));
  }, []);

  const center = [39.8283, -98.5795]; // Center of USA

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={center} zoom={4} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {schools
          .filter((s) => s.lat && s.lng)
          .map((s) => (
            <Marker key={s.id} position={[s.lat!, s.lng!]}>
              <Popup>
                <strong>{s.name}</strong><br />
                {s.city}, {s.state}<br />
                {s.division}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}

