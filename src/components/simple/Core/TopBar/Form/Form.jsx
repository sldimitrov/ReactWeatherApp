import { useState } from "react";

export default function Form() {
  return (
    <>
      <input
        type="text"
        placeholder="Search Location..."
        spellCheck="false"
        id="search-text"
        maxLength="16"
      />
    </>
  );
}
