import React, { useContext, useState, useMemo } from "react";
import getWeatherData from "./services/getWeatherData";

// Create context constants
const DataContext = React.createContext();
const SelectedCity = React.createContext();
const SearchHistory = React.createContext();
const HistoryTab = React.createContext();

// Initialise Custom Hooks to derive state when imported
export function useTheme() {
  return useContext(DataContext);
}
export function useSelectedCity() {
  return useContext(SelectedCity);
}
export function useSearchHistory() {
  return useContext(SearchHistory);
}
export function useHistoryTab() {
  return useContext(HistoryTab);
}
export function ThemeProvider({ children }) {
  /* This function packs all the required state and combines it into a useful ThemeProvider.
   That allow components to use state very comfortable by just importing it. */
  const [actualData, setActualData] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [historyTabVisibility, setHistoryTabVisibility] = useState(false);
  useMemo(() => {
    getWeatherData("London", setActualData);
  }, []);
  // Provide the required state to every component
  return (
    <DataContext.Provider value={[actualData, setActualData]}>
      <SelectedCity.Provider value={[selectedCity, setSelectedCity]}>
        <SearchHistory.Provider value={[searchHistory, setSearchHistory]}>
          <HistoryTab.Provider
            value={[historyTabVisibility, setHistoryTabVisibility]}
          >
            {children}
          </HistoryTab.Provider>
        </SearchHistory.Provider>
      </SelectedCity.Provider>
    </DataContext.Provider>
  );
}
