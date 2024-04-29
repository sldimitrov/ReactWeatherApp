import React from "react";
import { useState } from "react";
import { apiKey, apiUrl, ROW_VALUES } from "../../../imports/variables";
import TopBar from "./TopBar";
import Logo from "./TopBar/Logo";
import Form from "./TopBar/Form";
import HistoryButton from "../../base/HistoryButton";
import SearchButton from "../../base/SearchButton";
import MainInfo from "./MainInfo";
import {
  highTempImg,
  lowTempImg,
  humadityImg,
  cloudyImg,
  windImg,
} from "../../../imports/rowImages";

export default function Core({ children }) {
  const [sideBarShowed, setSideBarShowed] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [currentRowValues, setCurrentRowValues] = useState(ROW_VALUES);
  const [forecastHeading, setForecastHeading] = useState(
    "THUNDERSTORM WITH LIGHT DRIZZLE"
  );
  const [mainInfo, setMainInfo] = useState([
    "16°",
    "London",
    "06:09 - Monday, 9 Sep ‘23",
    "Clouds",
  ]);
  const [rowValues, setRowValues] = useState([
    "19°",
    "15°",
    "58%",
    "86%",
    "5km/h",
  ]);

  function handleSelectHistory() {
    /* This function is reponsible for managing the state of the
      left-slide-bar | It shows and dissapears on base of the state |
      We execute it when a button is clicked. */
    setSideBarShowed((curSelection) => !sideBarShowed);
  }

  async function handleGetData(city) {
    /* This function is triggered when the SearchButton is clicked |
      It sends request to the RESTapi and gets the desired data. */
    if (city != "") {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      var data = await response.json();
      console.log(data);
      displayData(data);
    }
  }

  function displayData(data) {
    /* This function by the one above (handleGetData). 
      It takes the data from the response and updates the state =>
      => (re-render of the screen) with actual data */
    var currentHeading = data.weather[0].description;
    setForecastHeading(currentHeading);

    // Extract the data for the mainInfo component
    var city = data.name;
    var currentTemperature = Math.round(data.main.temp) + "°";
    const myUnixTimestamp = data.dt; // convert timestamp to milliseconds below
    const curDate = new Date(myUnixTimestamp * 1000).toUTCString();
    var forecastImg = data.weather[0].main;

    // Create an Array and set the new State of the mainInfo component
    let mainInfoArray = [currentTemperature, city, curDate, forecastImg];
    setMainInfo(mainInfoArray);

    // Extract the data for the ValueRows
    var highTempValue = Math.round(data.main.temp_max) + "°c";
    var lowTempValue = Math.round(data.main.temp_min) + "°c";
    var humadityValue = data.main.humidity + "%";
    var cloudyValue = data.clouds.all + "%";
    var windValue = data.wind.speed + " km/h";

    // Create an Array and set the new State of the ValueRows
    let valueRowsArray = [
      highTempValue,
      lowTempValue,
      humadityValue,
      cloudyValue,
      windValue,
    ];

    setRowValues(valueRowsArray); // // Set values
    // Update the value of the ROW_VALUES with the new ones
    const ROW_VALUES = [
      { parameter: "Temp max", value: highTempValue, image: highTempImg },
      { parameter: "Temp min", value: lowTempValue, image: lowTempImg },
      { parameter: "Humidity", value: humadityValue, image: humadityImg },
      { parameter: "Cloudy", value: cloudyValue, image: cloudyImg },
      { parameter: "Wind", value: windValue, image: windImg },
    ];
    setCurrentRowValues(ROW_VALUES); // Set the new state
  }

  return (
    <>
      <TopBar>
        <Logo />
        <div className="search-bar-container blank-line">
          <Form
            selectedCity={selectedCity}
            onSelectCity={setSelectedCity}
            onSubmitForm={handleGetData}
          />
          <HistoryButton onSelectButton={handleSelectHistory} />
          <SearchButton onSelectButton={handleGetData} city={selectedCity} />
        </div>
      </TopBar>
      <MainInfo
        temperature={mainInfo[0]}
        city={mainInfo[1]}
        date={mainInfo[2]}
        forecastHeading={mainInfo[3]}
      />
    </>
  );
}
