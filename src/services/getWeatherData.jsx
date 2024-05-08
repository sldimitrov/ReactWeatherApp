import axios from "axios";
import { apiUrl, apiKey } from "../constants/variables";
import getWeatherHourly from "./getWeatherDataHourly";

export default async function getWeatherData(city, setActualData) {
  // Save the request URL into a constant variable
  const request = apiUrl + city + `&appid=${apiKey}`;

  axios
    .get(request)
    .then((response) => {
      // Serialize values (stringify them)
      let currCity = JSON.stringify(city);
      let currCityData = JSON.stringify(response);
      // Store the key and the value within the localStorage
      localStorage.setItem(currCity, currCityData);
      // Get the hourly data with the use of the coordinates
      getWeatherHourly(response.data.coord);
      // Update the actual data
      setActualData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
