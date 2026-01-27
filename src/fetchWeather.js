export async function fetchWeather(location) {
    try {
        const tempText = document.querySelector("#temperature");
        const description = document.querySelector("#description");
        const humidity = document.querySelector("#humidity");
        const windSpeed = document.querySelector("#windSpeed");
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=CBHNLFGAN2RTA6H35442DVVDP`)

        if (!response.ok) {
            throw new Error("Couldn't find Location");
        }

        const data = await response.json();
        console.log(data);
        tempText.textContent = "Temp: " + convertFahrenheitToCelsius(data.currentConditions.feelslike).toFixed(1);
        description.textContent = "Description: " + data.currentConditions.conditions;
        humidity.textContent = "Humidity: " + data.currentConditions.humidity;
        windSpeed.textContent = "Wind Speed: " + data.currentConditions.windspeed + " km/h";
    }
    catch(error) {
        console.error(error);
    }
}

function convertFahrenheitToCelsius(temp) {
    return (temp - 32) * (5/9);
}