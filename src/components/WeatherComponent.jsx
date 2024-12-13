import React from "react";

const WeatherComponent = ({ weather, toggleFavorite, isFavorite }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div>
      <p>
        Temperature: {Math.round(weather.main.temp - 273.15)}°C
        <img src={iconUrl} alt={weather.weather[0].description} style={{ marginLeft: '10px' }} />
      </p>
      <p>Precipitation Probability: {weather.pop ? weather.pop * 100 : 0}%</p>
      <p>Precipitation Volume: {weather.rain ? weather.rain['1h'] : 0} mm</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>Wind Direction: {weather.wind.deg}°</p>
      <p>Cloudiness: {weather.clouds.all}%</p>
      <button onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(weather.name);
      }}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default WeatherComponent;