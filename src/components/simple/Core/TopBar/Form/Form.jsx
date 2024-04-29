import { useState } from "react";
import InputField from "./InputField";
import HistoryButton from "../../../../base/HistoryButton";
import SearchButton from "../../../../base/SearchButton";
import handleGetData from "../../../../../services/getData";

export default function Form({ onClickHistory }) {
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <form className="search-bar-container blank-line">
      <InputField
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
        onSubmitForm={handleGetData}
      />
      <HistoryButton
        onSelectButton={() => {
          onClickHistory();
        }}
      />
      <SearchButton onSelectButton={handleGetData} city={selectedCity} />
    </form>
  );
}
