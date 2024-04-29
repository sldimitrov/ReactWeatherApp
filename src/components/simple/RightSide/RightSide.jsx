import { useState } from "react";

import Forecast from "./Forecast";
import Weather from "./Weather";
import ValueRow from "../../base/ValueRow";
import InfoRow from "../../base/InfoRow";
import {
  highTempImg,
  lowTempImg,
  humadityImg,
  cloudyImg,
  windImg,
} from "../../../imports/rowImages";

export default function RightSide({ data }) {
  const ROW_VALUES = [
    { parameter: "Temp max", value: "19°", image: highTempImg },
    { parameter: "Temp min", value: "15°", image: lowTempImg },
    { parameter: "Humidity", value: "58%", image: humadityImg },
    { parameter: "Cloudy", value: "86%", image: cloudyImg },
    { parameter: "Wind", value: "5km/h", image: windImg },
  ];

  return (
    <>
      <span className="weather-tab-container blur"></span>
      <main className="weather-tab-container">
        <section className="weather-details-container">
          <p id="weather-details">Weather Details...</p>
        </section>
        <Forecast forecastHeading={"THUNDERSTORM WITH LIGHT DRIZZLE"}>
          {ROW_VALUES.map((rowValues, index) => (
            <ValueRow key={rowValues.parameter} {...rowValues} />
          ))}
        </Forecast>
        <Weather>
          <InfoRow forecastHeading={"Snow"} temperature={"16*"} />
        </Weather>
        <script src="index.js"></script>
      </main>
    </>
  );
}
