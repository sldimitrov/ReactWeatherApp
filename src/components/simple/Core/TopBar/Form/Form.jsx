import InputField from "./InputField";
import { useThemeUpdate, useSelectedCity } from "../../../../../themeContext";
import HistoryButton from "../../../../base/HistoryButton";
import SearchButton from "../../../../base/SearchButton";

export default function Form({ onClickSearch, onSubmitForm }) {
  const setActualData = useThemeUpdate();
  const selectedCity = useSelectedCity();

  return (
    <div className="search-bar-container blank-line">
      <InputField onSubmitForm={onSubmitForm} />
      <HistoryButton />
      <SearchButton
        onSelectButton={() => {
          onClickSearch(selectedCity, setActualData);
        }}
      />
    </div>
  );
}
