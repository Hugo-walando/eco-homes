import type { Metadata } from 'next';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Eco Homes',
  description: 'Design and build your eco homes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
