import React, { useContext, useState, useEffect } from 'react';
import getWeatherData from './services/getWeatherData';

// Create context constants
const DataContext = React.createContext();
const DataUpdateContext = React.createContext();
const HistoryVisibility = React.createContext();
const SetHistoryVisibility = React.createContext();

// Initialise Custom Hooks to derive state when imported
export function useTheme() { 
  return useContext(DataContext)
}

export function useThemeUpdate() {
  return useContext(DataUpdateContext)
}

export function ThemeProvider({children}) {
  /* This function packs all the required state and combines it into a useful ThemeProvider.
   That allow components to use state very comfortable by just importing it. */
  const [actualData, setActualData] = useState("");
  const [historyTabVisibility, setHistoryTabVisibility] = useState(false);

  useEffect(() => {
    getWeatherData("London", setActualData);
  }, []);

  return (
    <DataContext.Provider value={actualData}>
      <DataUpdateContext.Provider value={setActualData}>
        {children}
      </DataUpdateContext.Provider>
    </DataContext.Provider>
  )
}