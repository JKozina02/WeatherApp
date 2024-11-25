const FAVORITES_KEY = 'favoriteCities';

export const getFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

// export const isFavorite = (cityName) => {
//   return getFavorites().includes(cityName);
// };

export const addRemoveFavorite = (cityName) => {
  let favorites = getFavorites();
  if (!favorites.includes(cityName)) {
    favorites.push(cityName);
  } else {
    favorites = favorites.filter(city => city !== cityName);
  }
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};