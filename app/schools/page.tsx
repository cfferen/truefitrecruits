"use client";

import { useEffect, useMemo, useState } from "react";

type School = {
  id: string;
  name: string;
  city: string;
  state: string;
  division: string;        // e.g., "NCAA DI", "NCAA DII", "NAIA", "NJCAA", "MCLA - DI"
  governingBody: string;   // NCAA | NAIA | NJCAA | MCLA | NCLL | Other
  conference?: string;
  sports: string[];        // e.g., ["lacrosse_men","soccer_women","football_men"]
  lat?: number;
  lng?: number;
};

const ALL_SPORT_OPTIONS = [
  { value: "lacrosse_men", label: "Men’s Lacrosse" },
  { value: "lacrosse_women", label: "Women’s Lacrosse" },
  { value: "football_men", label: "Football (Men)" },
  { value: "soccer_men", label: "Men’s Soccer" },
  { value: "soccer_women", label: "Women’s Soccer" }
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
  "NCLL - DII"
];

export default function SchoolsPage() {
  const [schools, setSchools] = useState<School[]>([]);
  const [q, setQ] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("");
  const [sportFilter, setSportFilter] = useState("");

  useEffect(() => {
    // fetch from the public JSON
    fetch("/data/schools.json", { cache: "no-store" })
      .then((r) => r.json())
      .then((data: School[]) => setSchools(data))
      .catch((e) => console.error(e));
  }, []);

  // build distinct state list
  const allStates = useMemo(() => {
    const s = Array.from(new Set(schools.map((x) => x.state))).sort();
    return s;
  }, [schools]);

  const filtered = useMemo(() => {
    return schools.filter((s) => {
      const matchesSearch =
        !q ||
        s.name.toLowerCase().includes(q.toLowerCase()) ||
        s.city.toLowerCase().includes(q.toLowerCase()) ||
        s.state.toLowerCase() === q.toLowerCase();

      const matchesState = !stateFilter || s.state === stateFilter;
      const matchesDivision = !divisionFilter || s.division === divisionFilter;
      const matchesSport =
        !sportFilter || (Array.isArray(s.sports) && s.sports.includes(sportFilter));

      return matchesSearch && matchesState && matchesDivision && matchesSport;
    });
  }, [schools, q, stateFilter, divisionFilter, sportFilter]);

  return (
    <div style={{ padding: "2rem 1.5rem", maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Search Schools</h1>

      {/* Filters */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 160px 200px 220px",
          gap: "0.75rem",
          marginBottom: "1rem"
        }}
      >
        <input
          placeholder="Search by school, city, state…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{
            padding: "0.6rem 0.75rem",
            borderRadius: 8,
            border: "1px solid #2c375c",
            background: "#0b1430",
            color: "white"
          }}
        />

        <select
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value)}
          style={selectStyle}
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
          style={selectStyle}
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
          style={selectStyle}
        >
          <option value="">All Sports</option>
          {ALL_SPORT_OPTIONS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Count */}
      <div style={{ marginBottom: "0.75rem", opacity: 0.85 }}>
        Showing <strong>{filtered.length}</strong> of {schools.length} schools
      </div>

      {/* Results list */}
      <div style={{ display: "grid", gap: "0.75rem" }}>
        {filtered.map((s) => (
          <div
            key={s.id}
            style={{
              border: "1px solid #223160",
              background: "#0a1430",
              borderRadius: 12,
              padding: "0.9rem 1rem"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                alignItems: "start",
                flexWrap: "wrap"
              }}
            >
              <div>
                <div style={{ fontSize: "1.05rem", fontWeight: 700 }}>{s.name}</div>
                <div style={{ opacity: 0.8, marginTop: 2 }}>
                  {s.city}, {s.state} • {s.division} ({s.governingBody})
                </div>
                {s.conference && (
                  <div style={{ opacity: 0.7, marginTop: 2 }}>Conf: {s.conference}</div>
                )}
              </div>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {s.sports.map((sp) => (
                  <span
                    key={sp}
                    style={{
                      fontSize: 12,
                      padding: "4px 8px",
                      borderRadius: 999,
                      border: "1px solid #2e4475",
                      background: "#0f214a"
                    }}
                  >
                    {labelForSport(sp)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div style={{ opacity: 0.7, padding: "2rem" }}>No schools match your filters.</div>
        )}
      </div>
    </div>
  );
}

function labelForSport(key: string) {
  const found = ALL_SPORT_OPTIONS.find((x) => x.value === key);
  return found ? found.label : key;
}

const selectStyle: React.CSSProperties = {
  padding: "0.6rem 0.75rem",
  borderRadius: 8,
  border: "1px solid #2c375c",
  background: "#0b1430",
  color: "white"
};
