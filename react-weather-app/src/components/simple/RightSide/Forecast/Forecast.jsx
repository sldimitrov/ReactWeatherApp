export default function Forecast({ children }) {
  return (
    <section className="forecast-container">
      <div id="forecast-heading-container">
        <h4 id="forecast-heading">THUNDERSTORM WITH LIGHT DRIZZLE</h4>
      </div>
      {children}
      <span className="blank-line" id="blank-container"></span>
    </section>
  );
}
