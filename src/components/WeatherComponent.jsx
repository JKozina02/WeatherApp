import React from "react";

const WeatherComponent = ({ weather, toggleFavorite, isFavorite }) => {
  return (
    <div>
      <h3>{weather.name}</h3>
      <p>{weather.weather[0].description}</p>
      <p>{Math.round(weather.main.temp - 273.15)}°C</p>
      <button onClick={() => toggleFavorite(weather.name)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default WeatherComponent;