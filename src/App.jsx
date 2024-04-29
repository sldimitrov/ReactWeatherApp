import { ROW_VALUES } from "./imports/variables.js";
import { useState } from "react";
import Parent from "./components/simple/Parent/index.js";
import Core from "./components/simple/Core/index.js";
import RightSide from "./components/simple/RightSide/index.js";

import LeftSide from "./components/simple/LeftSide/LeftSide.jsx";
import Aside from "./components/simple/LeftSide/Aside/Aside.jsx";
import Background from "./components/simple/LeftSide/Background/Background.jsx";
import "./index.scss";

function App() {
  return (
    <Parent>
      <Core />
      <RightSide />
    </Parent>
  );
}

export default App;
