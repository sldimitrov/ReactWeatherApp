import { useState } from "react";

export default function InputField({
  selectedCity,
  onSelectCity,
  onSubmitForm,
}) {
  function enterValue(value) {
    onSelectCity(value);
  }

  function submitForm(pressedKey) {
    if (pressedKey === "Enter") {
      onSubmitForm(selectedCity);
    }
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
        onKeyUp={(e) => {
          submitForm(e.key);
        }}
      />
    </>
  );
}
