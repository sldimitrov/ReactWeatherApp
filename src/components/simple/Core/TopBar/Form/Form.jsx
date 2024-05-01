import { useState, useContext } from "react";
import InputField from "./InputField";
import HistoryButton from "../../../../base/HistoryButton";
import SearchButton from "../../../../base/SearchButton";
import { ThemeContext } from "../../../../../App";

export default function Form({ onClickHistory, onClickSearch, onSubmitForm }) {
  const setActualData = useContext(ThemeContext);
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <div className="search-bar-container blank-line">
      <InputField
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
        onSubmitForm={onSubmitForm}
        setActualData={setActualData}
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
