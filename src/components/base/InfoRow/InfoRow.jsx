import { mapperImg } from "../../../constants/rowImages";

export default function InfoRow({ forecastHeading, temperature, currentTime }) {
  // Get the icon that is suitable for the current weather
  let weatherIcon = mapperImg.get(forecastHeading);

  return (
    <div className="line" id="line1">
      <img src={weatherIcon} alt="snowflake" className="weather-img" />
      <div className="hour-weather">
        <p id="current-time">
          {currentTime}
          <br />
        </p>
        <br />
        <p id="weather-description">{forecastHeading}</p>
      </div>
      <p className="forecast-temp">{temperature}</p>
    </div>
  );
}
