import React from "react";
import { useState, useEffect, useContext } from "react";
import TopBar from "./TopBar";
import Logo from "./TopBar/Logo";
import Form from "./TopBar/Form";
import MainInfo from "./MainInfo";
import getWeatherData from "../../../services/getWeatherData.jsx";
import { ThemeContext } from "../../../App.jsx";

export default function Core({ onClickHistory, actualData }) {
  // Extract the state with the use of Context
  const setActualData = useContext(ThemeContext);
  // Set the initial Info values with useState
  const [mainInfo, setMainInfo] = useState([
    "16°",
    "London",
    "06:09 - Monday, 9 Sep ‘23",
    "Clouds",
  ]);

  useEffect(() => {
    /* This anonymous function extract the data
     from the current state and updates UI */
    if (actualData) {
      let city = actualData.name;
      let currentTemperature = Math.round(actualData.main.temp) + "°";
      let forecastHeading = actualData.weather[0].main;
      const myUnixTimestamp = actualData.dt; // start with a Unix timestamp
      const currDate = new Date(myUnixTimestamp * 1000).toUTCString(); // convert timestamp to milliseconds

      let dataArray = [currentTemperature, city, currDate, forecastHeading];
      // Update the mainInfo state
      setMainInfo(dataArray);
    }
  }, [actualData]);

  return (
    <>
      <TopBar>
        <Logo />
        <Form
          onClickHistory={onClickHistory}
          onClickSearch={getWeatherData}
          onSubmitForm={getWeatherData}
        />
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
