import { useTheme, useSelectedCity } from "../../../../../../themeContext";

export default function InputField({
  onSearchCity,
  currInputText,
  setCurrInputText,
}) {
  const [selectedCity, setSelectedCity] = useSelectedCity();
  const [actualData, setActualData] = useTheme();

  function enterValue(value) {
    setCurrInputText(value);
  }

  function submitForm(pressedKey) {
    if (pressedKey === "Enter") {
      onSearchCity(currInputText, setActualData);
      setSelectedCity(currInputText);
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search Location..."
        spellCheck="false"
        id="search-text"
        maxLength="22"
        value={currInputText}
        onChange={(e) => enterValue(e.target.value)}
        onKeyUp={(e) => {
          submitForm(e.key);
        }}
      />
    </>
  );
}
