import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Weather from './components/Weather';
import MapView from './components/MapView';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [position, setPosition] = useState([0, 0]); // Default position

  const apiKey = '8443b6140013067cca19f8c91bdf42ba'; // Replace with your OpenWeatherMap API key

  const getWeather = async () => {
    if (!city) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setPosition([response.data.coord.lat, response.data.coord.lon]); // Set the position
      setError('');
    } catch (err) {
      setWeather(null);
      setError('City not found');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <Weather weather={weather} error={error} />
      {weather && <MapView position={position} />} {/* Show map only if weather data exists */}
    </div>
  );
}

export default App;
