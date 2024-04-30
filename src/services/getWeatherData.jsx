import axios from "axios";
import { apiUrl, apiKey } from "../constants/variables";

export default async function getWeatherData(city, setActualData) {
  const request = apiUrl + city + `&appid=${apiKey}`;

  axios
    .get(request)
    .then((response) => {
      setActualData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
