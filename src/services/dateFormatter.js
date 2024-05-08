export default function formatDateFromTimestamp(unixTimestamp) {
  const myDate = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds

  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[myDate.getDay()];

  // Get the month name (0 = January, 1 = February, ..., 11 = December)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = months[myDate.getMonth()];

  // Format the time (e.g., "06:09")
  const formattedTime = `${myDate
    .getHours()
    .toString()
    .padStart(2, "0")}:${myDate.getMinutes().toString().padStart(2, "0")}`;

  // Create the final formatted string
  const formattedDateString = `${formattedTime} - ${dayOfWeek}, ${myDate.getDate()} ${monthName} '${myDate
    .getFullYear()
    .toString()
    .slice(-2)}`;

  return formattedDateString;
}
