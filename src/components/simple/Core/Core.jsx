import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "../../../themeContext.js";
import getWeatherData from "../../../services/getWeatherData.jsx";
import TopBar from "./TopBar";
import Logo from "./TopBar/Logo";
import Form from "./TopBar/Form";
import MainInfo from "./MainInfo";
import dateFormatter from "../../../services/dateFormatter.js";

export default function Core() {
  // Use custom hooks to receive the useContext state
  const [actualData] = useTheme();
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
      const date = dateFormatter(actualData.dt); // start with a Unix timestamp
      let dataArray = [currentTemperature, city, date, forecastHeading];
      // Update the mainInfo state
      setMainInfo(dataArray);
    }
  }, [actualData]);
  return (
    <>
      <TopBar>
        <Logo />
        <Form onSearchCity={getWeatherData} />
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
