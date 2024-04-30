import React from "react";
import { useState } from "react";
import TopBar from "./TopBar";
import Logo from "./TopBar/Logo";
import Form from "./TopBar/Form";
import MainInfo from "./MainInfo";
import getData from "../../../services/getData.js";
import axiosRequest from "../../../services/axiosRequest.jsx";

export default function Core({ onClickHistory, actualData, setActualData }) {
  const [mainInfo, setMainInfo] = useState([
    "16°",
    "London",
    "06:09 - Monday, 9 Sep ‘23",
    "Clouds",
  ]);

  return (
    <>
      <TopBar>
        <Logo />
        <Form
          onClickHistory={onClickHistory}
          onClickSearch={axiosRequest}
          onSubmitForm={axiosRequest}
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
