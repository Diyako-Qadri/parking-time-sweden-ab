import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import { Lato } from 'next/font/google';
import "../../../src/app/globals.css";
import Footer from '@/components/Footer';

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Parking Time Sweden',
  description: 'Parking made easy with the digital parking disk of Parking Time',
=======
  title: 'Parking Time AB',
  description: 'Parking Time Sweden är ett teknik-startup som syftar till att revolutionera parkeringsupplevelsen för samtliga parter - parkören, parkeringsvakten, kommunen och (eller) fastighetsägaren.',
>>>>>>> feature/pts18-thrusted-by-section
  icons: {
    icon: '/images/parking-time-logo.png',
  },
};

const lato = Lato({ subsets: ['latin'], weight: '400' });

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {

  const messages = await getMessages();
 
  return (
    <html lang={locale} style={{ scrollBehavior: 'smooth' }} suppressHydrationWarning={true}>
      <body className={lato.className}>
        <NextIntlClientProvider messages={messages}>
        <Header />
          {children}
        <Footer />  
        </NextIntlClientProvider>
      </body>
    </html>
  );
}