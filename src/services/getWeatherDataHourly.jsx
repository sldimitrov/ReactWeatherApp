import axios from "axios";
import { apiUrlHours, apiKey } from "../constants/variables";

export default async function getWeatherHourly(coords) {
  const { lon, lat } = coords;
  const request =
    apiUrlHours +
    `lat=${lat}` +
    `&lon=${lon}` +
    `&appid=${apiKey}` +
    "&units=metric";

  axios
    .get(request)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
