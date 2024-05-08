import React from "react";
import Frame from "./components/simple/Frame";
import Core from "./components/simple/Core";
import WeatherTab from "./components/simple/WeatherTab";
import SearchHistoryTab from "./components/simple/SearchHistoryTab";
import { ThemeProvider } from "./themeContext.js";
import "./index.scss";

function App() {
  return (
    <ThemeProvider>
      <Frame>
        <Core />
        <WeatherTab />
        <SearchHistoryTab />
      </Frame>
    </ThemeProvider>
  );
}

export default App;
