import HistoryHeading from "./HistoryHeading";
import UserSearches from "./UserSearches";
import { useEffect } from "react";
import {
  useSelectedCity,
  useHistoryTab,
  useSetHistoryTab,
  useSearchHistory,
  useSetSearchHistory,
} from "../../../../themeContext";

export default function HistoryTab() {
  // Initialise state constants
  const selectedCity = useSelectedCity();
  const searchHistory = useSearchHistory();
  const setSearchHistory = useSetSearchHistory();
  const setHistoryTab = useSetHistoryTab();
  const historyTab = useHistoryTab();

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

  return (
    <aside className="aside">
      <div
        className={
          historyTab ? "sidebar-container active" : "sidebar-container"
        }
      >
        <HistoryHeading handleClickHistory={handleClickHistory} />
        <UserSearches handleClickHistory={handleClickHistory} />
      </div>
    </aside>
  );
}
