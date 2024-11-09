import { BurgerDrawer } from '@/components/Header/BurgerDrawer';
import { itim } from '@/style/fonts';
import { Link } from '@/components/Link';

import styles from './index.module.css';

export const Header = () => (
  <header className={styles.header}>
    <h1 className={`${styles.heading} ${itim.className}`}>Drogy Bezpečně</h1>

    <div className={styles.links}>
      <Link href='/'>Seznam látek</Link>
      <Link href='/trip-reports'>Trip reporty</Link>
    </div>

    <BurgerDrawer />
  </header>
);
