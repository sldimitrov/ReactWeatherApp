export default function Forecast({ children, forecastHeading }) {
  return (
    <section className="forecast-container">
      <div id="forecast-heading-container">
        <h4 id="forecast-heading">{forecastHeading}</h4>
      </div>
      {children}
      <span className="blank-line" id="blank-container"></span>
    </section>
  );
}
