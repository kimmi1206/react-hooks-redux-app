import styles from './Layout.module.css';

import Navigation from './Navigation';

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>{props.children}</main>
    </>
  );
};

export default Layout;
