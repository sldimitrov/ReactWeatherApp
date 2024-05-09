import {
  useTheme,
  useSelectedCity,
  useHourlyData,
} from "../../../../../../themeContext";

export default function InputField({
  onSearchCity,
  currInputText,
  setCurrInputText,
}) {
  const [selectedCity, setSelectedCity] = useSelectedCity();
  const [hourlyData, setHourlyData] = useHourlyData();
  const [actualData, setActualData] = useTheme();

  function enterValue(value) {
    setCurrInputText(value);
  }

  function submitForm(pressedKey) {
    if (pressedKey === "Enter") {
      onSearchCity(currInputText, setActualData, setHourlyData);
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
        autocomplete="off"
        maxLength="18"
        value={currInputText}
        onChange={(e) => enterValue(e.target.value)}
        onKeyUp={(e) => {
          submitForm(e.key);
        }}
      />
    </>
  );
}
