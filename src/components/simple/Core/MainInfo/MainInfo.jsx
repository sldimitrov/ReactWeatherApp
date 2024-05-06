import { mapperImg } from "../../../../constants/rowImages";

export default function MainInfo({ temperature, city, date, forecastHeading }) {
  // Icon suitable for the current weather
  let weatherIcon = mapperImg.get(forecastHeading);

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
