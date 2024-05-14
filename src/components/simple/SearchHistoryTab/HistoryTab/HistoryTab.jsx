import HistoryHeading from "./HistoryHeading";
import UserSearches from "./UserSearches";
import ClearHistory from "./UserSearches/ClearHistory";
import { useEffect } from "react";
import {
  useSelectedCity,
  useHistoryTab,
  useSearchHistory,
} from "../../../../themeContext";

export default function HistoryTab() {
  // Initialise state constants
  const [selectedCity] = useSelectedCity();
  const [searchHistory, setSearchHistory] = useSearchHistory();
  const [historyTab, setHistoryTab] = useHistoryTab();

  useEffect(() => {
    // Load the cities that are in LC within the SearchHistory
    const searchedCities = Object.keys(localStorage);
    for (let i = 0; i < searchedCities.length; i++) {
      setSearchHistory((prevHistory) => [
        ...prevHistory,
        searchedCities[i].replace(/"/g, ""),
      ]);
    }
  }, []);

  function handleClickHistory() {
    setHistoryTab(!historyTab);
  }
  useEffect(() => {
    // When the city changes and its not empty we add it to the HistoryTab
    if (selectedCity) {
      if (!searchHistory.includes(selectedCity)) {
        setSearchHistory((prevHistory) => [selectedCity, ...prevHistory]);
      }
    }
  }, [selectedCity]);
  function handleClearHistory() {
    setSearchHistory([]);
    handleClickHistory();
    window.localStorage.clear();
  }

  return (
    <aside className="aside">
      <div
        className={
          historyTab ? "sidebar-container active" : "sidebar-container"
        }
      >
        <HistoryHeading handleClickHistory={handleClickHistory} />
        <UserSearches handleClickHistory={handleClickHistory} />
        {searchHistory.length > 0 && (
          <ClearHistory handleClearHistory={handleClearHistory} />
        )}
      </div>
    </aside>
  );
}
