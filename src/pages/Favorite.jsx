import './Favorite.css';
import React, { useState, useEffect } from 'react';
import { getFavorites } from '../models/FavoriteModel';
import FavoriteWeatherComponent from '../components/FavoriteWeatherComponent';

export function Favorite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <div>
      <h3>Favorite Cities</h3>
      <ul>
        {favorites.map((favCity, index) => (
          <li key={index}>
            <FavoriteWeatherComponent weatherName={favCity} />
          </li>
        ))}
      </ul>
    </div>
  );
}