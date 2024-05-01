import { useState } from "react";
import InputField from "./InputField";
import { useThemeUpdate } from "../../../../../themeContext";
import HistoryButton from "../../../../base/HistoryButton";
import SearchButton from "../../../../base/SearchButton";

export default function Form({ onClickHistory, onClickSearch, onSubmitForm }) {
  const setActualData = useThemeUpdate();
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <div className="search-bar-container blank-line">
      <InputField
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
        onSubmitForm={onSubmitForm}
      />
      <HistoryButton
        onSelectButton={() => {
          onClickHistory();
        }}
      />
      <SearchButton
        onSelectButton={() => {
          onClickSearch(selectedCity, setActualData);
        }}
        city={selectedCity}
      />
    </div>
  );
}
