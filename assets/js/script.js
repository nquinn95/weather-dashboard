
//global variables for citys that have been saved, the weather API URL and the API Key for open weather
const cityHistory = [];
const weatherApiUrl = "https://api.openweathermap.org/";
const apiKey = "33c18137c7eeada489c911f5adf21546";



//timezone for Day.js
dayjs.extend(window.dajs_plugin_utc);
daysjs.extend(window.dayjs_plugin_timezone);