import { useState, createContext } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {}, // initialize functions
  removeFavorite: () => {},
  isFavorite: () => {},
}); //initial value/object

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  // we pass a function so react will execute it
  // in sequential order, so we will always use the update array
  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((previousUserFavorites) => {
      // returns an new array with the items we want to keep.
      // it receives a function which return true if we want to keep the item
      return previousUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };

  // tests whether at least one element meets the condition.
  const isFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
