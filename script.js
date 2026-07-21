/* ===== SKILLS HOVER EFFECT ===== */

const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
  skill.addEventListener('mouseenter', function () {
    skill.style.backgroundColor = 'white';
    skill.style.color = '#00adb5';
  });

  skill.addEventListener('mouseleave', function () {
    skill.style.backgroundColor = '#00adb5';
    skill.style.color = 'white';
  });
});


/* ===== WEATHER APP ===== */

const cityInput = document.getElementById("cityInput");
const weatherSearchBtn = document.getElementById("weatherSearchBtn");

const cityDisplay = document.getElementById("city");
const tempDisplay = document.getElementById("temperature");
const conditionDisplay = document.getElementById("condition");
const humidityDisplay = document.getElementById("humidity");
const windDisplay = document.getElementById("wind");
const iconDisplay = document.getElementById("weatherIcon");

const errorDisplay = document.getElementById("weatherError");
const loadingDisplay = document.getElementById("weatherLoading");

async function getWeather() {
  const city = cityInput.value.trim();

  if (city === "") {
    errorDisplay.textContent = "Please enter a city";
    return;
  }

  errorDisplay.textContent = "";
  loadingDisplay.textContent = "Loading...";

  try {
    // Convert city to coordinates
    let locationResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
    );
    let locationData = await locationResponse.json();

    if (!locationData.results) {
      throw new Error("City not found");
    }

    let location = locationData.results[0];
    let latitude = location.latitude;
    let longitude = location.longitude;

    // Get weather data (current conditions + hourly humidity, in Fahrenheit)
    let weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m&temperature_unit=fahrenheit`
    );
    let weatherData = await weatherResponse.json();

    let weather = weatherData.current_weather;

    cityDisplay.textContent = `${location.name}, ${location.country}`;
    tempDisplay.textContent = `${Math.round(weather.temperature)}°F`;
    windDisplay.textContent = `${weather.windspeed} mph`;
    conditionDisplay.textContent = getCondition(weather.weathercode);

    // Match the current hour to get the matching humidity reading
    const currentHourIndex = weatherData.hourly.time.indexOf(weather.time);
    const humidity = currentHourIndex !== -1
      ? weatherData.hourly.relative_humidity_2m[currentHourIndex]
      : null;
    humidityDisplay.textContent = humidity !== null ? `${humidity}%` : "N/A";

    iconDisplay.src = getIcon(weather.weathercode);
  } catch (error) {
    errorDisplay.textContent = error.message;
  } finally {
    loadingDisplay.textContent = "";
  }
}

function getCondition(code) {
  const conditions = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Cloudy",
    61: "Rain",
    71: "Snow",
    95: "Thunderstorm"
  };

  return conditions[code] || "Unknown";
}

function getIcon(code) {
  if (code === 0) {
    return "https://cdn-icons-png.flaticon.com/512/869/869869.png";
  }

  if (code >= 60 && code <= 69) {
    return "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
  }

  if (code >= 90) {
    return "https://cdn-icons-png.flaticon.com/512/1146/1146869.png";
  }

  return "https://cdn-icons-png.flaticon.com/512/414/414825.png";
}

weatherSearchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    getWeather();
  }
});

const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contacts = document.getElementById("contacts");
const weather = document.getElementById("weather");
const skills = document.getElementById("skills");

const clickedItem = "projects"; // Example clicked value

switch (clickedItem) {
  case "about":
    window.scrollTo({ top: 100, behavior: "smooth" });
    break;

  case "projects":
    window.scrollTo({ top: 600, behavior: "smooth" });
    break;

  case "contacts":
    window.scrollTo({ top: 1200, behavior: "smooth" });
    break;

  case "weather":
    window.scrollTo({ top: 1800, behavior: "smooth" });
    break;

  case "skill":
    window.scrollTo({ top: 2400, behavior: "smooth" });
    break;

  default:
    console.log("Unknown section clicked.");
}

