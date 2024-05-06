import { useState } from "react";
import InputField from "./InputField";
import {
  useThemeUpdate,
  useSetSelectedCity,
} from "../../../../../themeContext";
import HistoryButton from "../../../../base/HistoryButton";
import SearchButton from "../../../../base/SearchButton";

export default function Form({ onSearchCity }) {
  const setActualData = useThemeUpdate();
  const setSelectedCity = useSetSelectedCity();
  const [currInputText, setCurrInputText] = useState("");

  return (
    <div className="search-bar-container blank-line">
      <InputField
        onSearchCity={onSearchCity}
        currInputText={currInputText}
        setCurrInputText={setCurrInputText}
      />
      <HistoryButton />
      <SearchButton
        onSelectButton={() => {
          onSearchCity(currInputText, setActualData);
          setSelectedCity(currInputText);
        }}
      />
    </div>
  );
}
