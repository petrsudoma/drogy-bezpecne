import MenuIcon from '@mui/icons-material/Menu';

import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.heading}>Drogy Bezpečně</h1>

    <MenuIcon className={styles.burger} />
  </header>
);
