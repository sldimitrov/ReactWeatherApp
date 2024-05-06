import { useThemeUpdate } from "../../../../../../themeContext";
import {
  useSelectedCity,
  useSetSelectedCity,
} from "../../../../../../themeContext";

export default function InputField({
  onSearchCity,
  currInputText,
  setCurrInputText,
}) {
  const setSelectedCity = useSetSelectedCity();
  const setActualData = useThemeUpdate();

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
        maxLength="16"
        value={currInputText}
        onChange={(e) => enterValue(e.target.value)}
        onKeyUp={(e) => {
          submitForm(e.key);
        }}
      />
    </>
  );
}
