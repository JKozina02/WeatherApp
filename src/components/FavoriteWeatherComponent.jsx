import React, { useState, useEffect } from "react";
import WeatherComponent from "./WeatherComponent";
import { fetchWeather } from '../models/WeatherModel';

const FavoriteWeatherComponent = ({ weatherName }) => {
  const [expanded, setExpanded] = useState(false);
  const [weather, setWeather] = useState(null);

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

  return (
    <div 
      onClick={toggleExpand} 
      style={{
        border: "1px solid black",
        padding: "10px",
        cursor: "pointer",
        width: expanded ? "300px" : "150px",
        height: expanded ? "200px" : "100px",
        transition: "all 0.3s ease"
      }}
    >
      <h3>{weatherName}</h3>
      {expanded && weather && (
        <div>
          <WeatherComponent weather={weather} />
        </div>
      )}
    </div>
  );
};

export default FavoriteWeatherComponent;