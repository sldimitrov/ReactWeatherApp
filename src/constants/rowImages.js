// Images for the infoRow component icons
import highTempImg from "../assets/hot_thernometer.png";
import lowTempImg from "../assets/cold_thernometer.png";
import humadityImg from "../assets/waterdrop.png";
import cloudyImg from "../assets/cloudy.png";
import windImg from "../assets/wind.png";
// Images for the mainInfo component icon
import cloudImg from "../assets/Cloud.png";
import clearImg from "../assets/clear.png";
import rainImg from "../assets/rain.png";
import drizzleImg from "../assets/rain.png";
import mistImg from "../assets/mist.png";
import squallImg from "../assets/squall.webp";
import hazeImg from "../assets/haze.png";
// Initialise a mapper in order to optimize the change of the icons
const mapperImg = new Map([
  ["Clouds", cloudImg],
  ["Clear", clearImg],
  ["Rain", rainImg],
  ["Drizzle", drizzleImg],
  ["Mist", mistImg],
  ["Squall", squallImg],
  ["Haze", hazeImg],
]);
// Export constants
export {
  highTempImg,
  lowTempImg,
  humadityImg,
  cloudyImg,
  windImg,
  cloudImg,
  clearImg,
  rainImg,
  drizzleImg,
  mistImg,
  squallImg,
  hazeImg,
  mapperImg,
};
