
//global variables for citys that have been saved, the weather API URL and the API Key for open weather
var cityHistory = [];

//const weatherApiUrl = "https://api.openweathermap.org/";
const apiKey = "33c18137c7eeada489c911f5adf21546";
let selCity; 

//latitude and longitude


//timezone for Day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);


 var geoApi = `https://api.openweathermap.org/geo/1.0/direct?q=`;
var geoURL = `&limit=5&appid=${apiKey}`;
//getting data back from openweathermap
function  cityData(geoURLBase){
    fetch(geoURLBase)
    .then(function(response){
        return response.json()

    })
    .then(function(data){
        //get longitude and latitude for the city that is searched
        let latitude = data[0].lat;
        let longitude = data[0].lon;


        //call for the function searching for the weather
        weatherData(latitude,longitude);

        console.log(latitude);
        console.log(longitude);
    })
}

function weatherData(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.main.temp);
        console.log(data.weather[0].main)
        $("#cityDis").append(userCity.value);
        $("#cityWeather").append("Weather: " + data.weather[0].description);
        $("#temp").append("Temperature: " + data.main.temp + "F");
    
    })

}




var userCity = document.getElementById('user-city');
var cityForm = document.querySelector("#city-form")

cityForm.addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();
    cityData(geoApi +`${userCity.value}` + geoURL);

    console.log(userCity.value);
    
    cityHistory.push(userCity.value);
    localStorage.setItem("Cities", JSON.stringify(cityHistory));
    JSON.parse(localStorage.getItem("Cities"));
});


