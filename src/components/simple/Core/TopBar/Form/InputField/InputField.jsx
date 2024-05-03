import { useTheme, useThemeUpdate } from "../../../../../../themeContext";
import {
  useSelectedCity,
  useSetSelectedCity,
} from "../../../../../../themeContext";

export default function InputField({ onSubmitForm }) {
  const selectedCity = useSelectedCity();
  const setSelectedCity = useSetSelectedCity();
  const setActualData = useThemeUpdate();

  function enterValue(value) {
    setSelectedCity(value);
  }

  function submitForm(pressedKey) {
    if (pressedKey === "Enter") {
      onSubmitForm(selectedCity, setActualData);
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
