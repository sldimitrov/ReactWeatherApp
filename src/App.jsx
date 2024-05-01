import React, { useState } from "react";
import Frame from "./components/simple/Frame/index.js";
import Core from "./components/simple/Core/index.js";
import RightSide from "./components/simple/RightSide/index.js";
import LeftSide from "./components/simple/LeftSide/LeftSide.jsx";
import { ThemeProvider } from "./themeContext.js";
import "./index.scss";

// Initialise ThemeContext for the child components
export const ThemeContext = React.createContext();

function App() {
  const [historyTabVisibility, setHistoryTabVisibility] = useState(false);
  function handleSelectHistory() {
    /* This function manages the visibility of the HistoryLeftTab  */
    setHistoryTabVisibility((curSelection) => !historyTabVisibility);
  }
  return (
    <ThemeProvider>
      <Frame>
        <Core onClickHistory={handleSelectHistory} />
        <RightSide />
        {historyTabVisibility && <LeftSide onClickBg={handleSelectHistory} />}
      </Frame>
    </ThemeProvider>
  );
}

export default App;
