import cloudImg from "../../../images/Cloud.png";
import clearImg from "../../../images/clear.png";
import rainImg from "../../../images/rain.png";
import drizzleImg from "../../../images/drizzle.png";
import mistImg from "../../../images/mist.png";
import squallImg from "../../../images/squall.png";
import hazeImg from "../../../images/haze.png";

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
