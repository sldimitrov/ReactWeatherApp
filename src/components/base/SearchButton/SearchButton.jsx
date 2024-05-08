import searchImg from "../../../assets/search.png";
import { useSelectedCity } from "../../../themeContext";

export default function SearchButton({ onSelectButton }) {
  const [selectedCity] = useSelectedCity();
  function handleButtonClick() {
    onSelectButton(selectedCity);
  }

  return (
    <button id="search-button" onClick={() => handleButtonClick()}>
      <img src={searchImg} id="searcher-img" alt="Search icon" />
    </button>
  );
}
