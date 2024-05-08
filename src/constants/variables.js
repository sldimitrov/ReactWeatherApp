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
const apiUrlHours = "https://api.openweathermap.org/data/2.5/forecast?";

// Define the default state for the Forecast component
const defaultValues = ["19°", "15°", "58%", "86%", "5km/h"];
const ROW_VALUES = [
  { parameter: "Temp max", value: defaultValues[0], image: highTempImg },
  { parameter: "Temp min", value: defaultValues[1], image: lowTempImg },
  { parameter: "Humidity", value: defaultValues[2], image: humadityImg },
  { parameter: "Cloudy", value: defaultValues[3], image: cloudyImg },
  { parameter: "Wind", value: defaultValues[4], image: windImg },
];

const INFO_ROWS = [
  { forecastHeading: "Clouds", temperature: "5°", currentTime: "07:00" },
  { forecastHeading: "Clouds", temperature: "8°", currentTime: "10:00" },
  { forecastHeading: "Clouds", temperature: "10°", currentTime: "13:00" },
  { forecastHeading: "Clouds", temperature: "5°", currentTime: "16:00" },
  { forecastHeading: "Clouds", temperature: "8°", currentTime: "19:00" },
  { forecastHeading: "Clouds", temperature: "5°", currentTime: "21:00" },
];

export { ROW_VALUES, INFO_ROWS, apiKey, apiUrl, apiUrlHours };
