import { itim } from '@/style/fonts';

import styles from './page.module.css';

const Home = () => {
  return (
    <div>
      <div className={styles.image}>
        <h2 className={`${styles.heading} ${itim.className}`}>Seznam látek</h2>
      </div>
    </div>
  );
};

export default Home;
