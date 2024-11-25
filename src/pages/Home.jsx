import './Home.css';
import React, { useState, useEffect } from 'react';
import { getFavorites, addRemoveFavorite } from '../models/FavoriteModel';
import { fetchWeather } from '../models/WeatherModel';
import WeatherComponent from '../components/WeatherComponent'; // Poprawna ścieżka importu

export function Home() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]); // State for favorite cities

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleFetchWeather = async () => {
    try {
      const data = await fetchWeather(city);
      console.log(data);
      setWeather(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("City not found");
      setWeather(null);
    }
  };

  const toggleFavorite = (cityName) => {
    addRemoveFavorite(cityName);
    setFavorites(getFavorites());
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleFetchWeather}>Get Weather</button>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <WeatherComponent 
            weather={weather} 
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(weather.name)}
          />
        </div>
      )}
    </div>
  );
}