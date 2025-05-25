import clsx from 'clsx';
import { Open_Sans, } from 'next/font/google';

import '@/globals.scss';
import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';

import type { Metadata, } from 'next';

const openSans = Open_Sans( {
  subsets: [ 'latin', ],
  weight: [ '300', '400', '500', '600', '700', ],
}, );

export const metadata : Metadata = {
  title: 'My Astrology',
  description: 'My Astrology description',
};

export default function RootLayout( {
  children,
} : Readonly<{
  children : React.ReactNode;
}>, ) {
  return (
    <html lang="en">
      <body className={ clsx( [ openSans.className, 'container', 'bg-blue', 'text-white', ], ) }>
        <Nav className="mb-[24px]"/>
        <main className="flex flex-col min-h-[80vh]">
          { children }
        </main>
        <Footer className=""/>
      </body>
    </html>
  );
}
