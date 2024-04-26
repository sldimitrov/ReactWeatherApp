import {apiKey, apiUrl, city, currentTemperature, curDate, forecastImg, weatherIcon, icon, ROW_VALUES} from './imports/variables.js';
import {highTempImg, lowTempImg, humadityImg, cloudyImg, windImg} from './imports/rowImages.js'
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

  const [mainInfo, setMainInfo] = useState(["16°", "London", '06:09 - Monday, 9 Sep ‘23', 'Clouds'])
  const [rowValues, setRowValues] = useState(["19°", "15°", "58%", "86%", "5km/h"])
  const [forecastHeading, setForecastHeading] = useState('THUNDERSTORM WITH LIGHT DRIZZLE')
  const [currentRowValues, setCurrentRowValues] = useState(ROW_VALUES)

  function handleSelectHistory() {
    /* This function is reponsible for managing the state of the
      left-slide-bar | It shows and dissapears on base of the state |
      We call it with the click of a button and its initial value is False. */
    setSideBarShowed((curSelection) => !sideBarShowed)
  }

  async function handleGetData(city) {
    /* This function is triggered when the SeachButton is clicked |
      It sends request to the RESTapi and get the desired data. */
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    displayData(data)
  }

  function displayData(data) {
    /* This function is called just after the handleGetData. 
      It takes data from the RESTapi and extract the required one */

    var currentHeading = data.weather[0].description;
    setForecastHeading(currentHeading);

    // Extract the data for the mainInfo component
    var city = data.name;
    var currentTemperature = Math.round(data.main.temp) + "°";
    const myUnixTimestamp = data.dt; 
    const curDate = new Date(myUnixTimestamp * 1000).toUTCString(); // convert timestamp to milliseconds
    var forecastImg = data.weather[0].main;
    // Create an Array and set the new State of the mainInfo component
    let mainInfoArray = [currentTemperature, city, curDate, forecastImg]
    setMainInfo(mainInfoArray)

    // Extract the data for the ValueRows
    var highTempValue = Math.round(data.main.temp_max) + "°c";
    var lowTempValue = Math.round(data.main.temp_min) + "°c";
    var humadityValue = data.main.humidity + "%";
    var cloudyValue = data.clouds.all + "%";
    var windValue = data.wind.speed + " km/h";
    // Create an Array and set the new State of the ValueRows
    let valueRowsArray = [highTempValue, lowTempValue, humadityValue, cloudyValue, windValue]
    setRowValues(valueRowsArray) // // Set values
    // Update the value of the ROW_VALUES with the new ones
    const ROW_VALUES = [
      {parameter: "Temp max", value: highTempValue, image: highTempImg},
      {parameter: "Temp min", value: lowTempValue, image: lowTempImg},
      {parameter: "Humidity", value: humadityValue, image: humadityImg},
      {parameter: "Cloudy", value: cloudyValue, image: cloudyImg},
      {parameter: "Wind", value: windValue, image: windImg},
    ] 
    setCurrentRowValues(ROW_VALUES)  // Set the new state

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
        <MainInfo temperature={mainInfo[0]} city={mainInfo[1]} date={mainInfo[2]} forecastHeading={mainInfo[3]}/>
      </Core>
      <RightSide> 
        <Forecast forecastHeading={forecastHeading}>
          {currentRowValues.map((rowValues) => (
            <ValueRow {...rowValues}/>
          ))}
        </Forecast>
        <Weather>
          <InfoRow forecastHeading={mainInfo[3]} temperature={mainInfo[0]}/>
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

