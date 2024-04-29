import React from "react";
import { useState } from "react";
import { apiKey, apiUrl, ROW_VALUES } from "../../../constants/variables";
import TopBar from "./TopBar";
import Logo from "./TopBar/Logo";
import Form from "./TopBar/Form";
import MainInfo from "./MainInfo";

export default function Core({ onClickHistory, actualData, setActualData }) {
  const [mainInfo, setMainInfo] = useState([
    "16°",
    "London",
    "06:09 - Monday, 9 Sep ‘23",
    "Clouds",
  ]);

  async function getData(city) {
    /* This function is triggered when the SearchButton is clicked |
  It sends request to the RESTapi and gets the desired data. */
    if (city != "") {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      var data = await response.json();
      setActualData(data);

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
  }

  return (
    <>
      <TopBar>
        <Logo />
        <Form
          onClickHistory={onClickHistory}
          onClickSearch={getData}
          onSubmitForm={getData}
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
