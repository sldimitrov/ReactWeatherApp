import getWeatherData from "../../../../../../services/getWeatherData";
import { useTheme, useHourlyData } from "../../../../../../themeContext";
import resetImg from "../../../../../../assets/reset_white.png";

export default function SearchedCity({ city, onClickButton }) {
  const [actualData, setActualData] = useTheme();
  const [hourlyData, setHourlyData] = useHourlyData();
  return (
    <div
      className="browsed-city"
      id="example"
      onClick={() => {
        getWeatherData(city, setActualData, setHourlyData);
        onClickButton();
      }}
    >
      <p id="town">{city}</p>
    </div>
  );
}
