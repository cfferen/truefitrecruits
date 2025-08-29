"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

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

const ALL_DIVISIONS = [
  "NCAA DI",
  "NCAA DII",
  "NCAA DIII",
  "NAIA",
  "NJCAA",
  "MCLA - DI",
  "MCLA - DII",
  "NCLL - DI",
  "NCLL - DII"
];

const ALL_SPORTS = [
  { value: "lacrosse_men", label: "Men’s Lacrosse" },
  { value: "lacrosse_women", label: "Women’s Lacrosse" },
  { value: "football_men", label: "Football (Men)" },
  { value: "soccer_men", label: "Men’s Soccer" },
  { value: "soccer_women", label: "Women’s Soccer" }
];

// 🎨 Marker colors by division (simplified)
const divisionColors: Record<string, string> = {
  "NCAA DI": "blue",
  "NCAA DII": "green",
  "NCAA DIII": "purple",
  "NAIA": "orange",
  "NJCAA": "red",
  "MCLA - DI": "darkgreen",
  "MCLA - DII": "darkred",
  "NCLL - DI": "gray",
  "NCLL - DII": "black"
};

// 🧱 Create color marker
const createMarkerIcon = (color: string) =>
  new L.Icon({
    iconUrl: `https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=university|${color}`,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -40]
  });

export default function SchoolMapPage() {
  const [schools, setSchools] = useState<School[]>([]);
  const [divisionFilter, setDivisionFilter] = useState("");
  const [sportFilter, setSportFilter] = useState("");

  useEffect(() => {
    fetch("/data/schools.json")
      .then((r) => r.json())
      .then((data: School[]) => setSchools(data));
  }, []);

  const filteredSchools = useMemo(() => {
    return schools.filter((s) => {
      const matchesDivision = !divisionFilter || s.division === divisionFilter;
      const matchesSport = !sportFilter || s.sports.includes(sportFilter);
      return matchesDivision && matchesSport && s.lat && s.lng;
    });
  }, [schools, divisionFilter, sportFilter]);

  const center = [39.8283, -98.5795]; // US center

  return (
    <div>
      <div style={{ padding: "1rem", background: "#f9f9f9" }}>
        <h1 style={{ marginBottom: "1rem" }}>College Map Explorer</h1>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <select
            value={divisionFilter}
            onChange={(e) => setDivisionFilter(e.target.value)}
            style={dropdownStyle}
          >
            <option value="">All Divisions</option>
            {ALL_DIVISIONS.map((div) => (
              <option key={div} value={div}>{div}</option>
            ))}
          </select>

          <select
            value={sportFilter}
            onChange={(e) => setSportFilter(e.target.value)}
            style={dropdownStyle}
          >
            <option value="">All Sports</option>
            {ALL_SPORTS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
      </div>

      <MapContainer center={center} zoom={4} style={{ height: "90vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredSchools.map((s) => {
          const color = divisionColors[s.division] || "gray";
          return (
            <Marker
              key={s.id}
              position={[s.lat!, s.lng!]}
              icon={createMarkerIcon(color)}
            >
              <Popup>
                <strong>{s.name}</strong><br />
                {s.city}, {s.state}<br />
                {s.division}<br /><br />
                <Link href={`/schools/${s.id}`}>
                  <button style={linkButtonStyle}>View Profile →</button>
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

const dropdownStyle: React.CSSProperties = {
  padding: "0.6rem",
  borderRadius: 8,
  fontSize: "1rem",
  border: "1px solid #ccc",
  background: "#fff",
  minWidth: 200
};

const linkButtonStyle: React.CSSProperties = {
  marginTop: "0.5rem",
  background: "#002366",
  color: "#fff",
  border: "none",
  padding: "0.4rem 0.75rem",
  borderRadius: "4px",
  cursor: "pointer"
};


