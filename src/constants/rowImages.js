// Images for the infoRow component icons
import highTempImg from "../images/hot_thernometer.png";
import lowTempImg from "../images/cold_thernometer.png";
import humadityImg from "../images/waterdrop.png";
import cloudyImg from "../images/cloudy.png";
import windImg from "../images/wind.png";
// Images for the mainInfo component icon
import cloudImg from "../images/Cloud.png";
import clearImg from "../images/clear.png";
import rainImg from "../images/rain.png";
import drizzleImg from "../images/rain.png";
import mistImg from "../images/mist.png";
import squallImg from "../images/squall.webp";
import hazeImg from "../images/haze.png";
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
