import { useState } from "react";

export default function Form({ selectedCity, onSelectCity }) {
  function enterValue(value) {
    onSelectCity(value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search Location..."
        spellCheck="false"
        id="search-text"
        maxLength="16"
        value={selectedCity}
        onChange={(e) => enterValue(e.target.value)}
      />
    </>
  );
}
