const apiKey = "7e3233c8f67dd369b7dd8405485ff94f";
const Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBtn = document.querySelector("#search-btn");
const searchBox = document.querySelector("#search-box");
const weatherIcon = document.querySelector("#weather-icon");

async function checkWeather(city){
    const response = await fetch(Url + city + `&appid=${apiKey}`);

    var data = await response.json();

    document.getElementById("cityName").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp);

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
        document.querySelector(".lead").innerHTML = "Clouds";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
        document.querySelector(".lead").innerHTML = "Rain";
    }
    else if(data.weather[0] == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
        document.querySelector(".lead").innerHTML = "Drizzle";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
        document.querySelector(".lead").innerHTML = "Clear";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
        document.querySelector(".lead").innerHTML = "Mist";
    }
}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
});