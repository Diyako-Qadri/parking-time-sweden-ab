import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../../../src/app/globals.css';

export const metadata: Metadata = {
  title: 'Parking Time Sweden',
  description:
    'Parking made easy with the digital parking disk of Parking Time',
  icons: {
    icon: '/images/parking-time-logo.png',
  },
};

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] });

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      style={{ scrollBehavior: 'smooth' }}
      suppressHydrationWarning={true}
    >
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
