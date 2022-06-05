import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';

import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);

  const favoritesList = favoritesContext.favorites;

  const totalFavorites = favoritesContext.totalFavorites;

  return (
    <section>
      <h1>My Favorites</h1>
      {totalFavorites > 0 ? (
        <MeetupList meetups={favoritesList} />
      ) : (
        <p>You don't have any favorites yet.</p>
      )}
    </section>
  );
}

export default FavoritesPage;
