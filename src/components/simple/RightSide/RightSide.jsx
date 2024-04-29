

export default function RightSide({ children }) {
  return (
    <>
      <span className="weather-tab-container blur"></span>
      <main className="weather-tab-container">
        <section className="weather-details-container">
          <p id="weather-details">Weather Details...</p>
        </section>
        {children}
        <script src="index.js"></script>
      </main>
    </>
  );
}
