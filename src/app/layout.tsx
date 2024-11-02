import { type ReactNode } from 'react';
import type { Metadata } from 'next';
import { Itim } from 'next/font/google';

import { ContentWrapper } from '@/wrappers/ContentWrapper';
import { Header } from '@/components/Header';

import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const inter = Itim({
  weight: '400',
  subsets: ['latin'],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang='cs' className={inter.className}>
      <body>
        <ContentWrapper>
          <Header />

          {children}
        </ContentWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
