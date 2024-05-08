import { useState } from "react";
import InputField from "./InputField";
import { useTheme, useSelectedCity } from "../../../../../themeContext";
import HistoryButton from "../../../../base/HistoryButton";
import SearchButton from "../../../../base/SearchButton";
import getWeatherDataHourly from "../../../../../services/getWeatherDataHourly";

export default function Form({ onSearchCity }) {
  const [actualData, setActualData] = useTheme();
  const [selectedCity, setSelectedCity] = useSelectedCity();
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
          getWeatherDataHourly(currInputText);
          onSearchCity(currInputText, setActualData);
          setSelectedCity(currInputText);
        }}
      />
    </div>
  );
}
