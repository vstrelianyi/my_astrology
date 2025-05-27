import {
  Open_Sans,
  // Montserrat,
} from 'next/font/google';

import '@/globals.scss';
import Footer from '@/components/Footer/Footer';
import Modal from '@/components/Modal/Modal';
import Nav from '@/components/Nav/Nav';
import { AppStateProvider, } from '@/providers/AppStateProvider';
import { cn, } from '@/utils/cn';

import type { Metadata, } from 'next';

const openSans = Open_Sans( {
  subsets: [ 'latin', ],
  weight: [ '300', '400', '500', '600', '700', ],
}, );

// const montserrat = Montserrat( {
//   subsets: [ 'latin', ],
//   weight: [ '300', '400', '500', '600', '700', ],
//   variable: '--font-montserrat',
// }, );

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
      <body
        className={ cn(
          openSans.className,
          'container', 'bg-blue', 'text-white', 'min-h-screen',
        ) }
      >
        <Nav className="hidden xl:flex mb-[24px]"/>
        <AppStateProvider>
          <main className="flex flex-col h-full xl:h-auto xl:min-h-[80vh]">
            { children }
          </main>

          <Modal />
        </AppStateProvider>

        <Footer className="hidden xl:flex"/>
      </body>
    </html>
  );
}
