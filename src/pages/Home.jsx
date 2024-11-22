import './Home.css';
import React, { useState } from 'react';
import axios from 'axios';

export function Home() {
  const ApiKey = "c6d6107bd5446e84cc38e62dc9355d7f";
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]); // State for favorite cities

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

  const addFavorite = (cityName) => {
    if (cityName && !favorites.includes(cityName)) {
      setFavorites([...favorites, cityName]);
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
          <button 
            onClick={() => addFavorite(weather.name)} 
            disabled={favorites.includes(weather.name)}
          >
            {favorites.includes(weather.name) ? 'Added to Favorites' : 'Favorite'}
          </button>
        </div>
      )}
      <div>
        <h3>Favorite Cities</h3>
        <ul>
          {favorites.map((favCity, index) => (
            <li key={index}>{favCity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}