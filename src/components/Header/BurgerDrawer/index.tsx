'use client';
import { useState, type FC } from 'react';
import { Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from '@/components/Link';

import styles from './index.module.css';

export const BurgerDrawer: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.wrapper}>
      <MenuIcon className={styles.burgerIcon} onClick={handleIconClick} />

      <Drawer
        open={isOpen}
        anchor='right'
        PaperProps={{ sx: { width: '100%' } }}
      >
        <CloseIcon className={styles.crossIcon} onClick={handleIconClick} />

        <div className={styles.drawer}>
          <Link href='/' className={styles.link}>
            Seznam látek
          </Link>
          <Link href='/trip-reports' className={styles.link}>
            Trip reporty
          </Link>
        </div>
      </Drawer>
    </div>
  );
};
