import cloudImg from "../../../images/Cloud.png";
import clearImg from "../../../images/clear.png";
import rainImg from "../../../images/rain.png";
import drizzleImg from "../../../images/drizzle.png";
import mistImg from "../../../images/mist.png";

// Initialise a mapper in order to optimize the change of the icons
const mapper = new Map([
  ["Clouds", cloudImg],
  ["Clear", clearImg],
  ["Rain", rainImg],
  ["Drizzle", drizzleImg],
  ["Mist", mistImg],
]);

let weatherIcon;

export default function MainInfo({ temperature, city, date, forecastHeading }) {
  // and the icon that is suitable for the current weather
  console.log(forecastHeading);
  weatherIcon = mapper.get(forecastHeading);
  console.log(weatherIcon);

  return (
    <div className="info-container basic-font">
      <p className="current-temperature">{temperature}</p>
      <section className="basic-font" id="additional-info">
        <span id="city">{city}</span>
        <p id="date">{date}</p>
      </section>
      <img src={weatherIcon} alt="cloud" id="cloud-img" />
    </div>
  );
}
