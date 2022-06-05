import { Link } from 'react-router-dom';
import { useContext } from 'react';
import FavoritesContext from '../../../store/favorites-context';

import { links } from './textLib';
import styles from './Links.module.css';

const Links = (props) => {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <Link to={link.route}>{link.text}</Link>
        </li>
      ))}
      <li key='My Favorites'>
        <Link to='/favorites'>
          My Favorites
          <span className={styles.badge}>
            {favoritesContext.totalFavorites}
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default Links;
