"use client";

import { useState } from "react";
import type { Publication } from "../data/site";
import { Icon } from "./Icon";
import { PublicationList } from "./PublicationList";

export function PublicationExplorer({ items }: { items: Publication[] }) {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState<number | null>(null);
  const years = [...new Set(items.map((item) => item.year))].sort((a, b) => b - a);
  const normalizedQuery = query.trim().toLowerCase();
  const results = items.filter((item) =>
    (year === null || item.year === year) &&
    [item.title, item.authors, item.venue, item.year.toString(), item.award || ""]
      .some((value) => value.toLowerCase().includes(normalizedQuery))
  );

  function reset() { setQuery(""); setYear(null); }

  return (
    <div>
      <div className="publication-controls">
        <div className="year-filters" role="group" aria-label="Filter publications by year">
          <button type="button" aria-pressed={year === null} onClick={() => setYear(null)}>All years</button>
          {years.map((value) => <button type="button" key={value} aria-pressed={year === value} onClick={() => setYear(value)}>{value}</button>)}
        </div>
        <label className="search-field">
          <Icon name="search" size={15} />
          <span className="sr-only">Search publications</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search title, author, or venue" />
        </label>
      </div>
      <p className="result-count" role="status">{results.length} of {items.length} publications</p>
      {results.length ? <PublicationList items={results} headingLevel={2} /> : (
        <div className="search-empty">
          <h2>No matching publications</h2>
          <p>Try another keyword or choose a different year.</p>
          <button type="button" onClick={reset}>Clear filters</button>
        </div>
      )}
    </div>
  );
}
