import React from "react";
import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import Logo from "./TopBar/Logo";
import Form from "./TopBar/Form";
import MainInfo from "./MainInfo";
import getWeatherData from "../../../services/getWeatherData.jsx";

export default function Core({ onClickHistory, actualData, setActualData }) {
  const [mainInfo, setMainInfo] = useState([
    "16°",
    "London",
    "06:09 - Monday, 9 Sep ‘23",
    "Clouds",
  ]);

  useEffect(() => {
    if (actualData) {
      let city = actualData.name;
      let currentTemperature = Math.round(actualData.main.temp) + "°";
      let forecastHeading = actualData.weather[0].main;
      const myUnixTimestamp = actualData.dt; // start with a Unix timestamp
      const currDate = new Date(myUnixTimestamp * 1000).toUTCString(); // convert timestamp to milliseconds

      let dataArray = [currentTemperature, city, currDate, forecastHeading];
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
          setActualData={setActualData}
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
