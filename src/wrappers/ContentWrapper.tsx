import { type FC, type ReactNode } from 'react';

import styles from './ContentWrapper.module.css';

type Props = {
  children: ReactNode;
};

export const ContentWrapper: FC<Props> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);
