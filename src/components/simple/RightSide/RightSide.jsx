import Forecast from "./Forecast";
import Weather from "./Weather";
import ValueRow from "../../base/ValueRow";
import InfoRow from "../../base/InfoRow";
import {
  highTempImg,
  lowTempImg,
  humadityImg,
  cloudyImg,
  windImg,
} from "../../../imports/rowImages";

export default function RightSide({ children }) {
  return (
    <>
      <span className="weather-tab-container blur"></span>
      <main className="weather-tab-container">
        <section className="weather-details-container">
          <p id="weather-details">Weather Details...</p>
        </section>
        <Forecast forecastHeading={"Thunderstorm with React"}>
          <ValueRow parameter={"Clouds"} value={"15%"} image={highTempImg} />
          <ValueRow parameter={"Clouds"} value={"15%"} image={lowTempImg} />
          <ValueRow parameter={"Clouds"} value={"15%"} image={humadityImg} />
          <ValueRow parameter={"Clouds"} value={"15%"} image={cloudyImg} />
          <ValueRow parameter={"Clouds"} value={"15%"} image={windImg} />
        </Forecast>
        <Weather>
          <InfoRow forecastHeading={"Rainy day"} temperature={"16*"} />
        </Weather>
        <script src="index.js"></script>
      </main>
    </>
  );
}
