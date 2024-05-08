import { useState, useEffect } from "react";
import { useTheme, useHourlyData } from "../../../themeContext";
import Forecast from "./Forecast";
import Weather from "./Weather";
import ValueRow from "../../base/ValueRow";
import InfoRow from "../../base/InfoRow";
import { INFO_ROWS, ROW_VALUES } from "../../../constants/variables";

export default function RightSide() {
  // Extract useContext state and initialise new
  const [actualData] = useTheme();
  const [hourlyData, setHourlyData] = useHourlyData();
  const [currentRowValues] = useState(ROW_VALUES);
  const [currentInfoRows] = useState(INFO_ROWS);
  const [forecastHeading, setForecastHeading] = useState([
    "THUNDERSTORM WITH LIGHT DRIZZLE",
    "Snow",
  ]);

  useEffect(() => {
    if (actualData) {
      // Extract and set the data for the Weather
      let currentHeading = actualData.weather[0].description;
      let weatherDetails = actualData.weather[0].main;
      setForecastHeading([currentHeading, weatherDetails]);
      currentRowValues[0].value = Math.round(actualData.main.temp_max) + "°c";
      currentRowValues[1].value = Math.round(actualData.main.temp_min) + "°c";
      currentRowValues[2].value = actualData.main.humidity + "%";
      currentRowValues[3].value = actualData.clouds.all + "%";
      currentRowValues[4].value = Math.round(actualData.wind.speed) + " km/h";
    }
  }, [actualData]);

  useEffect(() => {
    if (!hourlyData || !hourlyData.list) {
      return; // Check for an undefined list
    }
    if (hourlyData) {
      // Extract the required data
      let rows = hourlyData.list.slice(0, 6);
      const weatherData = rows.map((row) => {
        const forecastHeading = row.weather[0].main;
        const currentTime = row.dt_txt.slice(11, 16);
        const temperature = Math.round(row.main.temp) + "°c";
        return { forecastHeading, currentTime, temperature };
      });
      // Set the new data to the HourlyData state
      currentInfoRows.map((key, index) => {
        currentInfoRows[index] = weatherData[index];
      });
      setHourlyData(currentInfoRows);
    }
  }, [hourlyData]);

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
              {currentInfoRows.map((infoRows, index) => (
                <InfoRow key={index} {...infoRows} />
              ))}
            </Weather>
          </div>
          <script src="index.js"></script>
        </div>
      </main>
    </>
  );
}
