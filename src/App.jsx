import React from "react";
import Frame from "./components/simple/Frame/index.js";
import Core from "./components/simple/Core/index.js";
import RightSide from "./components/simple/RightSide/index.js";
import LeftSide from "./components/simple/LeftSide/LeftSide.jsx";
import { ThemeProvider } from "./themeContext.js";
import "./index.scss";

function App() {
  return (
    <ThemeProvider>
      <Frame>
        <Core />
        <RightSide />
        <LeftSide />
      </Frame>
    </ThemeProvider>
  );
}

export default App;
