import { apiKey, apiUrl } from "../constants/variables";

export default async function getData(city) {
  /* This function is triggered when the SearchButton is clicked |
  It sends request to the RESTapi and returns the data. */
  if (city !== "") {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
  }
}