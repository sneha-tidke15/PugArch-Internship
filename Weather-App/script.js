const apiKey = "b52aeae6a9919bb0edbc27ccc19fb9e6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    alert("City not found");
    return;
  }

  const data = await response.json();
  const condition = data.weather[0].main;
  const lowerCondition = condition.toLowerCase();
  console.log("Weather condition:", condition);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (lowerCondition.includes("cloud")) {
    weatherIcon.src = "Images/clouds.png";
  } else if (lowerCondition.includes("clear")) {
    weatherIcon.src = "Images/clear.png";
  } else if (lowerCondition.includes("rain")) {
    weatherIcon.src = "Images/rain.png";
  } else if (lowerCondition.includes("mist") || lowerCondition.includes("haze")) {
    weatherIcon.src = "Images/mist.png";
  } else if (lowerCondition.includes("drizzle")) {
    weatherIcon.src = "Images/drizzle.png";
  } else if (lowerCondition.includes("snow")) {
    weatherIcon.src = "Images/snow.png";
  } else if (lowerCondition.includes("thunderstorm")) {
    weatherIcon.src = "Images/thunderstorm.png";
  } else {
    weatherIcon.src = "Images/default.png";
  }

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city === "") {
    alert("Please enter a city name");
    return;
  }
  checkWeather(city);
});
