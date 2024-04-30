export default function Weather({ children }) {
  return (
    <>
      <section className="weather-container">
        <div className="weather-forecast-container">
          <h4 id="weather-details">Today's Weather Forecast...</h4>
        </div>
        {children}
      </section>
    </>
  );
}
