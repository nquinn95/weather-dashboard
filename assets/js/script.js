
//global variables for citys that have been saved, the weather API URL and the API Key for open weather
const cityHistory = [];
//const weatherApiUrl = "https://api.openweathermap.org/";
const apiKey = "33c18137c7eeada489c911f5adf21546";



//timezone for Day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);


var weatherApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=33c18137c7eeada489c911f5adf21546`;
function  weatherData(weatherApiUrl){
    fetch(weatherApiUrl)
    .then(function(response){
        response.json()
    })
    .then(function(data){
        console.log(data);
    })
}

weatherData();