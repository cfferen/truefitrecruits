"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type School = {
  id: string;
  name: string;
  city: string;
  state: string;
  division: string;        // "NCAA DI" | "NCAA DII" | ...
  governingBody: string;   // NCAA | NAIA | NJCAA | MCLA | NCLL
  conference?: string;
  sports: string[];
  lat?: number;
  lng?: number;
};

const ALL_SPORT_OPTIONS = [
  { value: "lacrosse_men", label: "Men’s Lacrosse" },
  { value: "lacrosse_women", label: "Women’s Lacrosse" },
  { value: "football_men", label: "Football (Men)" },
  { value: "soccer_men", label: "Men’s Soccer" },
  { value: "soccer_women", label: "Women’s Soccer" },
];

const ALL_DIVISIONS = [
  "NCAA DI",
  "NCAA DII",
  "NCAA DIII",
  "NAIA",
  "NJCAA",
  "MCLA - DI",
  "MCLA - DII",
  "NCLL - DI",
];

export default function SchoolsMapPage() {
  const mapEl = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);
  const markerLayerRef = useRef<any>(null);

  const [schools, setSchools] = useState<School[]>([]);
  const [q, setQ] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("");
  const [sportFilter, setSportFilter] = useState("");

  // Load Leaflet assets via CDN once
  useEffect(() => {
    const ensureLeaflet = async () => {
      if ((window as any).L) return;
      await new Promise<void>((resolve) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
        link.onload = () => resolve();
      });
      await new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src =
          "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        document.body.appendChild(script);
        script.onload = () => resolve();
      });
    };

    ensureLeaflet().then(() => {
      // initialize map
      if (mapEl.current && !(mapRef.current)) {
        const L = (window as any).L;
        mapRef.current = L.map(mapEl.current, {
          center: [39.5, -98.35], // USA center
          zoom: 4,
          scrollWheelZoom: true,
        });
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 18,
        }).addTo(mapRef.current);
        markerLayerRef.current = L.layerGroup().addTo(mapRef.current);
      }
    });
  }, []);

  // Load data from public JSON
  useEffect(() => {
    fetch("/data/schools.json", { cache: "no-store" })
      .then((r) => r.json())
      .then((data: School[]) => setSchools(data))
      .catch(console.error);
  }, []);

  const allStates = useMemo(
    () => Array.from(new Set(schools.map((x) => x.state))).sort(),
    [schools]
  );

  const filtered = useMemo(() => {
    return schools.filter((s) => {
      const inMap = typeof s.lat === "number" && typeof s.lng === "number";
      if (!inMap) return false;

      const matchesSearch =
        !q ||
        s.name.toLowerCase().includes(q.toLowerCase()) ||
        s.city.toLowerCase().includes(q.toLowerCase()) ||
        s.state.toLowerCase() === q.toLowerCase();

      const matchesState = !stateFilter || s.state === stateFilter;
      const matchesDivision = !divisionFilter || s.division === divisionFilter;
      const matchesSport =
        !sportFilter ||
        (Array.isArray(s.sports) && s.sports.includes(sportFilter));

      return matchesSearch && matchesState && matchesDivision && matchesSport;
    });
  }, [schools, q, stateFilter, divisionFilter, sportFilter]);

  // Update markers when filtered changes
  useEffect(() => {
    const L = (window as any).L;
    if (!L || !mapRef.current || !markerLayerRef.current) return;

    const layer = markerLayerRef.current as any;
    layer.clearLayers();

    if (filtered.length === 0) return;

    const bounds = L.latLngBounds([]);

    filtered.forEach((s) => {
      if (typeof s.lat !== "number" || typeof s.lng !== "number") return;

      const marker = L.marker([s.lat, s.lng], {
        title: s.name,
      });

      const sportsList = (s.sports || [])
        .map((sp) => labelForSport(sp))
        .join(" · ");

      marker.bindPopup(
        `<strong>${escapeHtml(s.name)}</strong><br/>
         ${escapeHtml(s.city)}, ${escapeHtml(s.state)}<br/>
         ${escapeHtml(s.division)} (${escapeHtml(s.governingBody)})<br/>
         ${sportsList ? `<em>${escapeHtml(sportsList)}</em>` : ""}`
      );

      marker.addTo(layer);
      bounds.extend([s.lat, s.lng]);
    });

    // Fit to bounds (with some padding)
    if (filtered.length > 1) {
      mapRef.current.fitBounds(bounds.pad(0.25));
    } else {
      // single result: zoom in a bit
      const one = filtered[0];
      mapRef.current.setView([one.lat, one.lng], 10);
    }
  }, [filtered]);

  return (
    <main style={{ padding: "1rem 1rem 0", maxWidth: 1200, margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: ".5rem" }}>Schools Map</h1>

      {/* Controls */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 160px 200px 220px",
          gap: ".75rem",
          marginBottom: ".75rem",
        }}
      >
        <input
          placeholder="Search school, city, or state…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={inputStyle}
        />

        <select
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value)}
          style={inputStyle}
        >
          <option value="">All States</option>
          {allStates.map((st) => (
            <option key={st} value={st}>
              {st}
            </option>
          ))}
        </select>

        <select
          value={divisionFilter}
          onChange={(e) => setDivisionFilter(e.target.value)}
          style={inputStyle}
        >
          <option value="">All Divisions</option>
          {ALL_DIVISIONS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <select
          value={sportFilter}
          onChange={(e) => setSportFilter(e.target.value)}
          style={inputStyle}
        >
          <option value="">All Sports</option>
          {ALL_SPORT_OPTIONS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Map */}
      <div
        ref={mapEl}
        style={{
          height: "70vh",
          width: "100%",
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,.1)",
          overflow: "hidden",
          background: "#0b1430",
        }}
      />
    </main>
  );
}

function labelForSport(key: string) {
  const found = ALL_SPORT_OPTIONS.find((x) => x.value === key);
  return found ? found.label : key;
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

const inputStyle: React.CSSProperties = {
  padding: "0.6rem 0.75rem",
  borderRadius: 8,
  border: "1px solid #2c375c",
  background: "#0b1430",
  color: "white",
};
