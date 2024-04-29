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
} from "../../../constants/rowImages";
import { ROW_VALUES } from "../../../constants/variables";

export default function RightSide({ actualData, setActualData }) {
  const [currentRowValues, setCurrentRowValues] = useState(ROW_VALUES);
  const [forecastHeading, setForecastHeading] = useState(
    "THUNDERSTORM WITH LIGHT DRIZZLE"
  );

  // var currentHeading = data.weather[0].description;
  // setForecastHeading(currentHeading);

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
