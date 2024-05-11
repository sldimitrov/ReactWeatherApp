import getWeatherData from "../../../../../../services/getWeatherData";
import { useTheme, useHourlyData } from "../../../../../../themeContext";
import resetImg from "../../../../../../assets/reset_white.png";

export default function SearchedCity({ city, onClickButton }) {
  const [actualData, setActualData] = useTheme();
  const [hourlyData, setHourlyData] = useHourlyData();
  return (
    <div className="browsed-city" id="example">
      <p id="town">{city}</p>

      <img
        src={resetImg}
        alt="Image for reseting searches"
        id="reset-button"
        onClick={() => {
          getWeatherData(city, setActualData, setHourlyData);
          onClickButton();
        }}
      />
    </div>
  );
}
