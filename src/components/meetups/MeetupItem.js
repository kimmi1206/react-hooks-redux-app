import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

import styles from './MeetupItem.module.css';
import Card from '../interfaces/Card';

const MeetupItem = (props) => {
  const favoritesContext = useContext(FavoritesContext);

  const isFavorite = favoritesContext.isFavorite(props.id);

  const toggleFavoriteHandler = () => {
    isFavorite
      ? favoritesContext.removeFavorite(props.id) // if isFavorite is true
      : favoritesContext.addFavorite({
          // if isFavorite is false
          id: props.id,
          title: props.title,
          description: props.description,
          image: props.image,
          address: props.address,
        });
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteHandler}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
