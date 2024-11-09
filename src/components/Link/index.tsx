'use client';
import { type FC, type PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './index.module.css';

type Props = PropsWithChildren<{
  href: string;
  className?: string;
}>;

export const Link: FC<Props> = ({ href, className, children }) => {
  const pathname = usePathname();

  const isLinkActive = pathname === href;

  return (
    <NextLink
      href={href}
      className={`${styles.link} ${
        isLinkActive ? styles.activeLink : null
      } ${className}`}
    >
      {children}
    </NextLink>
  );
};
