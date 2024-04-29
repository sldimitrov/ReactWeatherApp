import { apiKey, apiUrl } from "../constants/variables";

export default async function displayData(city, setMainInfo) {
  /* This function is triggered when the SearchButton is clicked |
  It sends request to the RESTapi and gets the desired data. */
  if (city != "") {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    var city = data.name;
    var currentTemperature = Math.round(data.main.temp) + "°";
    const myUnixTimestamp = data.dt; // convert timestamp to milliseconds below
    const curDate = new Date(myUnixTimestamp * 1000).toUTCString();
    var forecastImg = data.weather[0].main;

    // Create an Array and set the new State of the mainInfo component
    let mainInfoArray = [currentTemperature, city, curDate, forecastImg];
    setMainInfo(mainInfoArray);
  }
}