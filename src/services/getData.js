import { apiKey, apiUrl } from "../constants/variables";

export default async function handleGetData(city) {
  /* This function is triggered when the SearchButton is clicked |
    It sends request to the RESTapi and gets the desired data. */
  if (city != "") {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    console.log(data)
    return data;
  }
}