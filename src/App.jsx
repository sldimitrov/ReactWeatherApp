import React, { useEffect, useState } from "react";
import Frame from "./components/simple/Frame/index.js";
import Core from "./components/simple/Core/index.js";
import RightSide from "./components/simple/RightSide/index.js";
import LeftSide from "./components/simple/LeftSide/LeftSide.jsx";
import getWeatherData from "./services/getWeatherData.jsx";
import "./index.scss";

// Initialise ThemeContext for the child components
export const ThemeContext = React.createContext();

function App() {
  // Set state for the WeatherData and the visibility of the HistoryTab
  const [actualData, setActualData] = useState("");
  const [sideBarShowed, setSideBarShowed] = useState(false);

  useEffect(() => {
    // Set the initial state with actual data for London
    getWeatherData("London", setActualData);
  }, []);

  function handleSelectHistory() {
    /* Manage the state of the left-slide-bar */
    setSideBarShowed((curSelection) => !sideBarShowed);
  }
  return (
    <ThemeContext.Provider value={setActualData}>
      <Frame>
        <Core onClickHistory={handleSelectHistory} actualData={actualData} />
        <RightSide actualData={actualData} />
        {sideBarShowed && <LeftSide onClickBg={handleSelectHistory} />}
      </Frame>
    </ThemeContext.Provider>
  );
}

export default App;
