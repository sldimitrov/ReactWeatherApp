import axios from "axios";
import { apiUrl, apiKey } from "../constants/variables";

export default async function getWeatherData(city, setActualData) {
  // Save the request URL into a constant variable
  const request = apiUrl + city + `&appid=${apiKey}`;
  axios
    .get(request)
    .then((response) => {
      // Serialize values
      let currCity = JSON.stringify(city);
      let currCityData = JSON.stringify(response);
      // Store the key and the value within the LC
      localStorage.setItem(currCity, currCityData);
      // Update the actual data
      setActualData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
