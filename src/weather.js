export class Weather {
    constructor(data, location) {
        this.city = location;
        this.tempFahrenheit = data.currentConditions.feelslike.toFixed(1);
        this.tempCelsius = this.convertFahrenheitToCelsius(this.tempFahrenheit).toFixed(1);
        this.description = data.currentConditions.conditions;
        this.humidity = data.currentConditions.humidity;
        this.windSpeed = data.currentConditions.windspeed;
        this.isCelsius = true;
    }

    convertFahrenheitToCelsius(temp) {
        return (temp - 32) * (5/9);
    }

    convertCelsiusToFahrenheit(temp) {
        return (temp * (9/5)) + 32;
    }

    getCurrentTemp() {
        return this.isCelsius ? this.tempCelsius: this.tempFahrenheit;
    }

    getTempUnit() {
        return this.isCelsius ? '°C' : '°F';
    }

    toggleUnit() {
        this.isCelsius = !this.isCelsius;
    }
}