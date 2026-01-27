import { fetchWeather } from "./fetchWeather.js"

document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector("#searchBtn");
    searchBtn.addEventListener("click", () => {
        const location = document.querySelector("#location").value;
        fetchWeather(location);
    });
});

