import './Home.css';
import '../images/icons';
import React, { useState, useEffect } from 'react';
import { getFavorites, addRemoveFavorite } from '../models/FavoriteModel';
import { fetchWeather } from '../models/WeatherModel';
import WeatherComponent from '../components/WeatherComponent';

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
    <div className='center'>
      <div className="search-background">
        <div className='search-field'>
          <button className='search-button' onClick={handleFetchWeather}><img src='../images/icons/Search.svg'/></button>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
          />
        </div>
      
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
    </div>
  );
}