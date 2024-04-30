import { useState, useEffect } from "react";

import Forecast from "./Forecast";
import Weather from "./Weather";
import ValueRow from "../../base/ValueRow";
import InfoRow from "../../base/InfoRow";
import { ROW_VALUES } from "../../../constants/variables";

export default function RightSide({ actualData, setActualData }) {
  const [currentRowValues, setCurrentRowValues] = useState(ROW_VALUES);
  const [currentTemperature, setCurrentTemperature] = useState("15°");
  const [forecastHeading, setForecastHeading] = useState([
    "THUNDERSTORM WITH LIGHT DRIZZLE",
    "Snow",
  ]);

  useEffect(() => {
    if (actualData) {
      // Extract and set the data for the whole RightSide
      let currentHeading = actualData.weather[0].description;
      let weatherDetails = actualData.weather[0].main;
      setForecastHeading([currentHeading, weatherDetails]);
      let currentTemperature = Math.round(actualData.main.temp) + "°";
      setCurrentTemperature(currentTemperature);
      currentRowValues[0].value = Math.round(actualData.main.temp_max) + "°c";
      currentRowValues[1].value = Math.round(actualData.main.temp_min) + "°c";
      currentRowValues[2].value = actualData.main.humidity + "%";
      currentRowValues[3].value = actualData.clouds.all + "%";
      currentRowValues[4].value = actualData.wind.speed + " km/h";
    }
  }, [actualData]);

  return (
    <>
      <span className="weather-tab-container blur"></span>
      <main className="weather-tab-container">
        <section className="weather-details-container">
          <p id="weather-details">Weather Details...</p>
        </section>
        <Forecast forecastHeading={forecastHeading[0]}>
          {ROW_VALUES.map((rowValues, index) => (
            <ValueRow key={rowValues.parameter} {...rowValues} />
          ))}
        </Forecast>
        <Weather>
          <InfoRow
            forecastHeading={forecastHeading[1]}
            temperature={currentTemperature}
          />
        </Weather>
        <script src="index.js"></script>
      </main>
    </>
  );
}
