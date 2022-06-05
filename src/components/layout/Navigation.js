import styles from './Navigation.module.css';

import Links from './lib/Links';
import { NavTitle } from './lib/textLib';

const Navigation = (props) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>{NavTitle}</div>
        <nav>
          <Links />
        </nav>
      </header>
    </>
  );
};

export default Navigation;
