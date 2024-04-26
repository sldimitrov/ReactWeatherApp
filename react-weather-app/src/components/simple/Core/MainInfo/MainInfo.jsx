import testImg from "../../../images/Cloud.png";

export default function MainInfo({ temperature, city, date }) {
  return (
    <div className="info-container basic-font">
      <p className="current-temperature">{temperature}</p>
      <section className="basic-font" id="additional-info">
        <span id="city">{city}</span>
        <p id="date">{date}</p>
      </section>
      <img src={testImg} alt="cloud" id="cloud-img" />
    </div>
  );
}
