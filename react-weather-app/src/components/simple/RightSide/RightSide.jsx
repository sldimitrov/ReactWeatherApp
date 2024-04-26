import exampleImg from "../../images/clouds.png";

import React from "react";
import Forecast from "./Forecast";
import ValueRow from "../../base/ValueRow";
import Weather from "./Weather";
import InfoRow from "../../base/InfoRow";

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
