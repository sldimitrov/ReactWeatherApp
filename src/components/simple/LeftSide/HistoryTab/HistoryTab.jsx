import exitButton from "../../../../images/exit_button.png";
import SearchedCity from "./SearchedCity";
import { useEffect } from "react";
import { useSelectedCity } from "../../../../themeContext";
import {
  useSearchHistory,
  useSetSearchHistory,
} from "../../../../themeContext";

export default function HistoryTab({ onSelectButton }) {
  const selectedCity = useSelectedCity();
  const searchHistory = useSearchHistory();
  const setSearchHistory = useSetSearchHistory();

  useEffect(() => {
    // When the city changes and its not empty we add it to the HistoryTab
    if (selectedCity) {
      if (!searchHistory.includes(selectedCity)) {
        setSearchHistory((prevHistory) => [...prevHistory, selectedCity]);
      }
    }
  }, [selectedCity]);

  return (
    <aside className="aside">
      <div className="sidebar-container active">
        <div className="sidebar-nav">
          <h2 id="sidebar-heading">Searching History</h2>
          <button
            id="exit-button"
            onClick={() => {
              onSelectButton();
            }}
          >
            <img src={exitButton} alt="exit button" id="exit-img" />
          </button>
        </div>
        <section className="history-container active">
          {searchHistory.map((currCity, index) => (
            <SearchedCity
              city={currCity}
              key={index}
              onClickButton={onSelectButton}
            />
          ))}
        </section>
      </div>
    </aside>
  );
}
