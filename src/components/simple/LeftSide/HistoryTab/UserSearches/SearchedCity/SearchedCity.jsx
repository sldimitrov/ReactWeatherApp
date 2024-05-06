import getWeatherData from "../../../../../../services/getWeatherData";
import { useTheme } from "../../../../../../themeContext";

export default function SearchedCity({ city, onClickButton }) {
  const [actualData, setActualData] = useTheme();
  return (
    <div className="browsed-city" id="example">
      <p id="town">{city}</p>
      <button
        id="restore-button"
        onClick={() => {
          getWeatherData(city, setActualData);
          onClickButton();
        }}
      >
        <p id="restore-text">Restore</p>
      </button>
    </div>
  );
}
