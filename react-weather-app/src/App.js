import { useState } from 'react';

import Parent from "./components/simple/Parent";
import Core from "./components/simple/Core";
import TopBar from "./components/simple/Core/TopBar";
import Logo from "./components/simple/Core/TopBar/Logo";
import Form from "./components/simple/Core/TopBar/Form";
import HistoryButton from "./components/base/HistoryButton";
import SearchButton from "./components/base/SearchButton";
import MainInfo from "./components/simple/Core/MainInfo";

import RightSide from "./components/simple/RightSide";
import Forecast from "./components/simple/RightSide/Forecast";
import exampleImg from "./components/images/clouds.png";
import ValueRow from "./components/base/ValueRow";
import Weather from "./components/simple/RightSide/Weather";
import InfoRow from "./components/base/InfoRow";

import SlideBar from "./components/simple/SlideBar";
import BarContainer from './components/simple/SlideBar/BarContainer';
import Heading from "./components/simple/SlideBar/Heading";
import ExitButton from './components/base/ExitButton';
import BlackBackground from './components/base/BlackBackground';
import "./index.scss";

function App() {
  const [sideBarShowed, setSideBarShowed] = useState(false);

  const [selectedCity, setSelectedCity] = useState("");

  function handleSelectHistory() {
    /* This function is reponsible for managing the state of the
      left-slide-bar | It shows and dissapears on base of the state |
      We call it with the click of a button and its initial value is False. */
    setSideBarShowed((curSelection) => !sideBarShowed)
  }

  async function handleGetData(city) {
    /* This function is triggered when the SeachButton is clicked |
      It sends request to the RESTapi and get the desired data. */
    const apiKey = "539d9b287b9b99eee7e12081aa43f3a8";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
  }

  return (
    <Parent>
      <Core> 
        <TopBar>
          <Logo />
          <div className="search-bar-container blank-line">
            <Form selectedCity={selectedCity} onSelectCity={setSelectedCity}/>
            <span>
            <HistoryButton onSelectButton={handleSelectHistory} />
            <SearchButton onSelectButton={handleGetData} city={selectedCity}/>
            </span>
          </div>
        </TopBar>
        <MainInfo />
      </Core>
      <RightSide> 
        <Forecast>
          <ValueRow parameter={"Temp max"} value={25} image={exampleImg} />
          <ValueRow parameter={"Temp max"} value={25} image={exampleImg} />
          <ValueRow parameter={"Temp max"} value={25} image={exampleImg} />
          <ValueRow parameter={"Temp max"} value={25} image={exampleImg} />
          <ValueRow parameter={"Temp max"} value={25} image={exampleImg} />
        </Forecast>
        <Weather>
          <InfoRow />
        </Weather>
      </RightSide>
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

