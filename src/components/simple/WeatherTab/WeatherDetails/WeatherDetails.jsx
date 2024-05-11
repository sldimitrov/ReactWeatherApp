export default function WeatherDetails({ children, forecastHeading }) {
  return (
    <>
      <section className="forecast-container">
        <div id="forecast-heading-container">
          <h4 id="forecast-heading">{forecastHeading}</h4>
        </div>
        {children}
      </section>
      <div className="blank-line" id="blank-container"></div>
    </>
  );
}
