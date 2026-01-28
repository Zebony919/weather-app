import "./style.css"
import { fetchWeather, displayWeather } from "./fetchWeather.js"

let currentWeather = null;

document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector("#searchBtn");

    searchBtn.addEventListener("click", async () => {
        const location = document.querySelector("#location").value;
        currentWeather = await fetchWeather(location);
        displayWeather(currentWeather);
    });

    const tempTypeBtn = document.querySelector("#tempTypeBtn");
    const tempTypeDisplay = document.querySelector("#tempTypeDisplay");
    tempTypeBtn.addEventListener("click", () => {
        currentWeather.toggleUnit();
        tempTypeDisplay.textContent = currentWeather.isCelsius ? "Celsius" : "Fahrenheit";
        displayWeather(currentWeather);
    })
});

