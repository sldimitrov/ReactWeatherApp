import { useState } from 'react';

import Core from "./components/simple/Core";
import TopBar from "./components/simple/Core/TopBar";
import HistoryButton from "./components/base/HistoryButton";
import SearchButton from "./components/base/SearchButton";
import MainInfo from "./components/simple/Core/MainInfo";
import Parent from "./components/simple/Parent";
import RightSide from "./components/simple/RightSide";
import SlideBar from "./components/simple/SlideBar";
import BarContainer from './components/simple/SlideBar/BarContainer';
import Heading from "./components/simple/SlideBar/Heading";
import ExitButton from './components/base/ExitButton';
import BlackBackground from './components/base/BlackBackground';
import "./index.scss";

function App() {
  const [sideBarShowed, setSideBarShowed] = useState(false);

  function handleSelectHistory() {
    setSideBarShowed((curSelection) => !sideBarShowed)
  }

  return (
    <Parent>
      <Core> 
        <TopBar>
          <HistoryButton onSelectButton={handleSelectHistory} />
          <SearchButton />
        </TopBar>
        <MainInfo />
      </Core>
      <RightSide />
      {sideBarShowed && (
        <div>
          <SlideBar>
            <aside className="aside">
              <BarContainer>
                <Heading>
                  <ExitButton onSelectExit={handleSelectHistory} />
                </Heading>
              </BarContainer>
            </aside>
          </SlideBar>
          <BlackBackground onClickBackground={handleSelectHistory}/>
        </div>
      )}
    </Parent>
  );
}

export default App;

