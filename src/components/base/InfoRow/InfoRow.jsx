import {
  cloudImg,
  clearImg,
  rainImg,
  drizzleImg,
  mistImg,
  squallImg,
  hazeImg,
} from "../../../constants/rowImages";

// Initialise a mapper in order to optimize the change of the icons
const mapper = new Map([
  ["Clouds", cloudImg],
  ["Clear", clearImg],
  ["Rain", rainImg],
  ["Drizzle", drizzleImg],
  ["Mist", mistImg],
  ["Squall", squallImg],
  ["Haze", hazeImg],
]);

let weatherIcon;

export default function InfoRow({ forecastHeading, temperature, currentTime }) {
  // Get the icon that is suitable for the current weather
  weatherIcon = mapper.get(forecastHeading);

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
