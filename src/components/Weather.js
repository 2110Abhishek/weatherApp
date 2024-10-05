import React from 'react';
import './Weather.css'; // Create a separate CSS file for weather component styles

function Weather({ weather, error }) {
  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!weather) {
    return null;
  }

  return (
    <div className="weatherResult">
      <h2>Weather in {weather.name}</h2>
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>Temperature: <strong>{weather.main.temp}°C</strong></p>
      <p>Humidity: <strong>{weather.main.humidity}%</strong></p>
      <p>Wind Speed: <strong>{weather.wind.speed} m/s</strong></p>
      <p>Description: <strong>{weather.weather[0].description}</strong></p>
    </div>
  );
}

export default Weather;
