import { useState } from "react";
import InputField from "./InputField";
import HistoryButton from "../../../../base/HistoryButton";
import SearchButton from "../../../../base/SearchButton";
import displayData from "../../../../../services/displayData";

export default function Form({ onClickHistory, onClickSearch, onSubmitForm }) {
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
          onClickSearch(selectedCity);
        }}
        city={selectedCity}
      />
    </div>
  );
}
