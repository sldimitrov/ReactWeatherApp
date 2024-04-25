import exampleImg from "../../images/clouds.png";

export default function InfoRow({ weatherImg, weatherType, temperature }) {
  return (
    <div className="line" id="line1">
      <img src={exampleImg} alt="snowflake" className="weather-img" />
      <div className="hour-weather">
        <p id="current-time">
          09:00
          <br />
        </p>
        <br />
        <p id="weather-description">{"Snow"}</p>
      </div>
      <p className="forecast-temp">{"19°"}</p>
    </div>
  );
}
