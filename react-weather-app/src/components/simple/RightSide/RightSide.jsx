import exampleImg from "../../images/clouds.png";

import React from "react";
import Forecast from "./Forecast";
import ValueRow from "../../base/ValueRow";
import Weather from "./Weather";
import InfoRow from "../../base/InfoRow";

export default function RightSide() {
  return (
    <>
      <span className="weather-tab-container blur"></span>
      <main className="weather-tab-container">
        <section className="weather-details-container">
          <p id="weather-details">Weather Details...</p>
        </section>

        <Forecast>
          <ValueRow parameter={"Temp max"} value={25} image={exampleImg} />
          <ValueRow parameter={"Temp max"} value={25} image={exampleImg} />
          <ValueRow parameter={"Temp max"} value={25} image={exampleImg} />
          <ValueRow parameter={"Temp max"} value={25} image={exampleImg} />
          <ValueRow parameter={"Temp max"} value={25} image={exampleImg} />
        </Forecast>
        <Weather>
          <InfoRow />
        </Weather>
        <script src="index.js"></script>
      </main>
    </>
  );
}
