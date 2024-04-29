import React from "react";
import { useState } from "react";
import { apiKey, apiUrl, ROW_VALUES } from "../../../constants/variables";
import TopBar from "./TopBar";
import Logo from "./TopBar/Logo";
import Form from "./TopBar/Form";
import MainInfo from "./MainInfo";

export default function Core({ onClickHistory }) {
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
  }

  return (
    <>
      <TopBar>
        <Logo />
        <Form onClickHistory={onClickHistory} />
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
