/* ===== SMOOTH SCROLL ===== */
document.querySelector("nav").addEventListener("click", function(event) {
  // Check if what the user clicked is actually an anchor link <a>
  if (event.target.tagName === "A") {
    event.preventDefault(); // Stop instant jump behavior

    // Get the href attribute value (e.g., "#home", "#about")
    const targetId = event.target.getAttribute("href");

    // Find that section element on the page and scroll to it smoothly
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }
});
/* ===== SKILLS HOVER EFFECT ===== */
const skillBadges = document.querySelectorAll('.skill');
skillBadges.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.backgroundColor = 'white';
    skill.style.color = '#00adb5';
  });
  skill.addEventListener('mouseleave', () => {
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
  if (!city) {
    errorDisplay.textContent = "Please enter a city";
    return;
  }

  errorDisplay.textContent = "";
  loadingDisplay.textContent = "Loading...";

  try {
    let locRes = await fetch(`https://open-meteo.com{encodeURIComponent(city)}&count=1`);
    let locData = await locRes.json();
    if (!locData.results) throw new Error("City not found");

    let { latitude, longitude, name, country } = locData.results[0];

    let weathRes = await fetch(`https://open-meteo.com{latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m&temperature_unit=fahrenheit`);
    let weathData = await weathRes.json();
    let weather = weathData.current_weather;

    cityDisplay.textContent = `${name}, ${country}`;
    tempDisplay.textContent = `${Math.round(weather.temperature)}°F`;
    windDisplay.textContent = `${weather.windspeed} mph`;
    conditionDisplay.textContent = getCondition(weather.weathercode);
    iconDisplay.src = getIcon(weather.weathercode);

    const hourIdx = weathData.hourly.time.indexOf(weather.time);
    humidityDisplay.textContent = hourIdx !== -1 ? `${weathData.hourly.relative_humidity_2m[hourIdx]}%` : "N/A";
  } catch (error) {
    errorDisplay.textContent = error.message;
  } finally {
    loadingDisplay.textContent = "";
  }
}

function getCondition(code) {
  const conditions = { 0: "Clear Sky", 1: "Mainly Clear", 2: "Partly Cloudy", 3: "Cloudy", 61: "Rain", 71: "Snow", 95: "Thunderstorm" };
  return conditions[code] || "Unknown";
}

function getIcon(code) {
  if (code === 0) return "https://flaticon.com";
  if (code >= 60 && code <= 69) return "https://flaticon.com";
  if (code >= 90) return "https://flaticon.com";
  return "https://flaticon.com";
}

weatherSearchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keyup", (e) => { if (e.key === "Enter") getWeather(); });


