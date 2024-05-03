import getWeatherData from "../../../../../services/getWeatherData";
import { useThemeUpdate } from "../../../../../themeContext";

export default function SearchedCity({ city, onClickButton }) {
  const setActualData = useThemeUpdate();

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
        Restore
      </button>
    </div>
  );
}
