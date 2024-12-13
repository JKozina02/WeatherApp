import React, { useState, useEffect } from "react";
import WeatherComponent from "./WeatherComponent";
import { fetchWeather } from '../models/WeatherModel';
import { addRemoveFavorite, getFavorites } from '../models/FavoriteModel';

const FavoriteWeatherComponent = ({ weatherName }) => {
  const [expanded, setExpanded] = useState(false);
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState(getFavorites());

  useEffect(() => {
    const handleFetchWeather = async () => {
      try {
        const data = await fetchWeather(weatherName);
        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (expanded) {
      handleFetchWeather();
    }
  }, [expanded, weatherName]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleFavorite = (cityName) => {
    addRemoveFavorite(cityName);
    setFavorites(getFavorites());
  };

  return (
    <div 
      onClick={toggleExpand} 
      style={{
        border: "1px solid black",
        padding: "10px",
        cursor: "pointer",
        width: expanded ? "300px" : "150px",
        height: expanded ? "auto" : "100px",
        transition: "all 0.3s ease"
      }}
    >
      <h3>{weatherName}</h3>
      {expanded && weather && (
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
};

export default FavoriteWeatherComponent;