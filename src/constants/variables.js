import {
  highTempImg,
  lowTempImg,
  humadityImg,
  cloudyImg,
  windImg,
} from "./rowImages";

// Declare the the the Key and the URL for the RESTapi
const apiKey = "539d9b287b9b99eee7e12081aa43f3a8";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Define the default state for the Forecast component
const defaultValues = ["19°", "15°", "58%", "86%", "5km/h"];
const timeIntervals = ["07:00", "10:00", "13:00"];
const ROW_VALUES = [
  { parameter: "Temp max", value: defaultValues[0], image: highTempImg },
  { parameter: "Temp min", value: defaultValues[1], image: lowTempImg },
  { parameter: "Humidity", value: defaultValues[2], image: humadityImg },
  { parameter: "Cloudy", value: defaultValues[3], image: cloudyImg },
  { parameter: "Wind", value: defaultValues[4], image: windImg },
];

export { ROW_VALUES, apiKey, apiUrl, timeIntervals };
