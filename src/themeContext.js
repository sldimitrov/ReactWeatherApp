import React, { useContext, useState, useMemo } from 'react';
import getWeatherData from './services/getWeatherData';

// Create context constants
const DataContext = React.createContext();
const DataUpdateContext = React.createContext();
const SelectedCity = React.createContext();
const SetSelectedCity = React.createContext();
const SearchHistory = React.createContext();
const SetSearchHistory = React.createContext();


// Initialise Custom Hooks to derive state when imported
export function useTheme() { 
  return useContext(DataContext)
}

export function useThemeUpdate() {
  return useContext(DataUpdateContext)
}

export function useSelectedCity() {
  return useContext(SelectedCity)
}

export function useSetSelectedCity() {
  return useContext(SetSelectedCity)
}

export function useSearchHistory() {
  return useContext(SearchHistory)
}

export function useSetSearchHistory() {
  return useContext(SetSearchHistory)
}

export function ThemeProvider({children}) {
  /* This function packs all the required state and combines it into a useful ThemeProvider.
   That allow components to use state very comfortable by just importing it. */
  const [actualData, setActualData] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  useMemo(() => {
    getWeatherData("London", setActualData);
  }, []);

  return (
    <DataContext.Provider value={actualData}>
      <DataUpdateContext.Provider value={setActualData}>
        <SelectedCity.Provider value={selectedCity}>
          <SetSelectedCity.Provider value={setSelectedCity}>
            <SearchHistory.Provider value={searchHistory}>
              <SetSearchHistory.Provider value={setSearchHistory}>
                    {children} 
              </SetSearchHistory.Provider>
            </SearchHistory.Provider>
          </SetSelectedCity.Provider>
        </SelectedCity.Provider>
      </DataUpdateContext.Provider>
    </DataContext.Provider>
  )
}