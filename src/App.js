import React from "react";
import Frame from "./components/simple/Frame/index.js";
import Core from "./components/simple/Core/index.js";
import WeatherTab from "./components/simple/WeatherTab/index.js";
import SearchHistoryTab from "./components/simple/SearchHistoryTab/index.js";
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
