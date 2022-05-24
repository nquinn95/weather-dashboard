
//global variables for citys that have been saved, the weather API URL and the API Key for open weather
var cityHistory = [];

//const weatherApiUrl = "https://api.openweathermap.org/";
const apiKey = "33c18137c7eeada489c911f5adf21546";
let selCity; 


//timezone for Day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);


 var weatherApiUrlBase = `http://api.openweathermap.org/geo/1.0/direct?q=`;
var baseURL2 = `&limit=5&appid=${apiKey}`;
//getting data back from openweathermap
function  weatherData(weatherApi){
    fetch(weatherApi)
    .then(function(response){
        return response.json()

    })
    .then(function(data){
        console.log(data); 
    })
}

// weatherData(weatherApiUrl);


var userCity = document.getElementById('user-city');
var cityForm = document.querySelector("#city-form")

cityForm.addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();
    weatherData(weatherApiUrlBase +`${userCity.value}` + baseURL2);
    console.log(userCity.value);
    
    cityHistory.push(userCity.value);

    localStorage.setItem("Cities", JSON.stringify(cityHistory));
    JSON.parse(localStorage.getItem("Cities"));
});


