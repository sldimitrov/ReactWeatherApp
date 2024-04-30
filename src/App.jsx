import { useState } from "react";
import Frame from "./components/simple/Frame/index.js";
import Core from "./components/simple/Core/index.js";
import RightSide from "./components/simple/RightSide/index.js";
import LeftSide from "./components/simple/LeftSide/LeftSide.jsx";
import "./index.scss";

function App() {
  const [sideBarShowed, setSideBarShowed] = useState(false);
  const [actualData, setActualData] = useState("");
  function handleSelectHistory() {
    /* This function is reponsible for managing the state of the left-slide-bar */
    setSideBarShowed((curSelection) => !sideBarShowed);
  }
  return (
    <Frame>
      <Core
        onClickHistory={handleSelectHistory}
        actualData={actualData}
        setActualData={setActualData}
      />
      <RightSide actualData={actualData} setActualData={setActualData} />
      {sideBarShowed && <LeftSide onClickBg={handleSelectHistory} />}
    </Frame>
  );
}

export default App;
