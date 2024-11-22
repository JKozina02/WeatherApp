import './Home.css';
import React, { useState } from 'react';
import axios from 'axios';

export function Home() {
  const ApiKey = "YOUR API HERE";
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`);
      console.log(response.data); 
      setWeather(response.data);
      setError("");
    } catch (err) {
      console.error(err); 
      setError("City not found");
      setWeather(null);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>{weather.weather[0].description}</p>
          <p>{Math.round(weather.main.temp - 273.15)}°C</p>
        </div>
      )}
    </div>
  );
}