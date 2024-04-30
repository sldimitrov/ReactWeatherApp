import axios from "axios";
import { apiUrl, apiKey } from "../constants/variables";

export default function axiosRequest(city) {
  const request = apiUrl + city + `&appid=${apiKey}`;

  axios
    .get(request)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
