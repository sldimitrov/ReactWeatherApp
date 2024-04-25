import testImg from "../../../images/Cloud.png";

export default function MainInfo({ temperature, city, date, image }) {
  return (
    <div className="info-container basic-font">
      <p className="current-temperature">16°</p>
      <section className="basic-font" id="additional-info">
        <span id="city">London</span>
        <p id="date">06:09 - Monday, 9 Sep ‘23</p>
      </section>
      <img src={testImg} alt="cloud" id="cloud-img" />
    </div>
  );
}
