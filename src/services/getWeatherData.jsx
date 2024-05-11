import axios from "axios";
import { apiUrl, apiKey } from "../constants/variables";
import getWeatherHourly from "./getDataHourly";

export default async function getWeatherData(
  city,
  setActualData,
  setHourlyData
) {
  // Save the request URL into a constant variable
  const request = apiUrl + city + `&appid=${apiKey}`;

  axios
    .get(request)
    .then((response) => {
      // Serialize values (stringify them)
      let currCity = JSON.stringify(city);
      let currCityData = JSON.stringify(response);
      // Get the hourly data with the use of the coordinates
      getWeatherHourly(response.data.coord, setHourlyData);
      // Store the key and the value within the localStorage
      localStorage.setItem(currCity, currCityData);
      // Update the actual data
      setActualData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
