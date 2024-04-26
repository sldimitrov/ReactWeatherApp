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

  // Define the default values for the elements within the mainInfo C.
  var city = "London";
  var currentTemperature = "16°";
  var curDate = "06:09 - Monday, 9 Sep ‘23";
  var forecastHeading = "Cloudy"
  var weatherIcon
  var icon

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
    displayData(data)
  }

  function displayData(data) {
    /* This function is called just after the handleGetData. 
      It takes data from the RESTapi and extract the required one */
    console.log(data);

    // Extract the data for the mainInfo component
    var city = data.name;
    var currentTemperature = Math.round(data.main.temp) + "°";
    const myUnixTimestamp = data.dt; 
    const curDate = new Date(myUnixTimestamp * 1000).toUTCString(); // convert timestamp to milliseconds
    // Initialise a mapper in order to optimize the change of the icons
    const mapper = new Map([
      ["Clouds", "./components/images/clouds.png"],
      ["Clear", "./components/images/clear.png"],
      ["Rain", "./components/images/rain.png"],
      ["Drizzle", "./components/images/drizzle.png"],
      ["Mist", "./components/images/mist.png"],
    ]);
    // Get the forecast heading 
    forecastHeading = data.weather[0].main;
    // and the icon that is suitable for the current weather
    weatherIcon = mapper.get(forecastHeading)

    console.log(city)
    console.log(currentTemperature)
    console.log(curDate)
    console.log(weatherIcon)
  }

  return (
    <Parent>
      <Core> 
        <TopBar>
          <Logo />
          <div className="search-bar-container blank-line">
            <Form selectedCity={selectedCity} onSelectCity={setSelectedCity}/>
            <HistoryButton onSelectButton={handleSelectHistory} />
            <SearchButton onSelectButton={handleGetData} city={selectedCity}/>
          </div>
        </TopBar>
        <MainInfo temperature={currentTemperature} city={city} date={curDate}/>
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

