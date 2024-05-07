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
  const [selectedCity, setSelectedCity] = useSelectedCity();
  const [searchHistory, setSearchHistory] = useSearchHistory();
  const [historyTab, setHistoryTab] = useHistoryTab();

  function handleClickHistory() {
    setHistoryTab(!historyTab);
  }
  useEffect(() => {
    // When the city changes and its not empty we add it to the HistoryTab
    if (selectedCity) {
      if (!searchHistory.includes(selectedCity)) {
        setSearchHistory((prevHistory) => [...prevHistory, selectedCity]);
      }
    }
  }, [selectedCity]);

  function handleClearHistory() {
    setSearchHistory([]);
    handleClickHistory();
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
