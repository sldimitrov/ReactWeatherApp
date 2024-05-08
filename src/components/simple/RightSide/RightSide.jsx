import { useState, useEffect } from "react";
import { useTheme } from "../../../themeContext";
import Forecast from "./Forecast";
import Weather from "./Weather";
import ValueRow from "../../base/ValueRow";
import InfoRow from "../../base/InfoRow";
import { ROW_VALUES, timeIntervals } from "../../../constants/variables";

export default function RightSide() {
  // Extract useContext state and initialise new
  const [actualData, setActualData] = useTheme();
  const [currentRowValues] = useState(ROW_VALUES);
  const [currentHourTemp, setCurrentHourTemp] = useState(["15°", "09:00"]);
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
      currentRowValues[0].value = Math.round(actualData.main.temp_max) + "°c";
      currentRowValues[1].value = Math.round(actualData.main.temp_min) + "°c";
      currentRowValues[2].value = actualData.main.humidity + "%";
      currentRowValues[3].value = actualData.clouds.all + "%";
      currentRowValues[4].value = Math.round(actualData.wind.speed) + " km/h";

      let currentTemperature = Math.round(actualData.main.temp) + "°";
      let currTime = new Date();
      currTime = currTime.getHours() + ":" + currTime.getMinutes();
      setCurrentHourTemp([currentTemperature, currTime]);
    }
  }, [actualData]);

  return (
    <>
      <span className="weather-tab-container blur"></span>
      <main className="weather-tab-container">
        <div className="scrollbox">
          <div className="scrollbox inner">
            <section className="weather-details-container">
              <p id="weather-details">Weather Details...</p>
            </section>
            <Forecast forecastHeading={forecastHeading[0]}>
              {ROW_VALUES.map((rowValues) => (
                <ValueRow key={rowValues.parameter} {...rowValues} />
              ))}
            </Forecast>
            <Weather>
              <InfoRow
                forecastHeading={forecastHeading[1]}
                temperature={currentHourTemp[0]}
                currentTime={timeIntervals[0]}
              />
              <InfoRow
                forecastHeading={currentTime}
                temperature={currentHourTemp[0]}
                currentTime={timeIntervals[1]}
              />
            </Weather>
          </div>
          <script src="index.js"></script>
        </div>
      </main>
    </>
  );
}
