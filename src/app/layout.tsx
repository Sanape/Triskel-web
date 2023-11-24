import Link from 'next/link';
import './globals.scss';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TriskelTech +Creactivos',
  description: 'Web de TriskelTech',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="top-0 sticky  ">
          <Navbar></Navbar>
        </header>
        {children}
        <footer className='flex column'>
          <ul className="social-media-links ">
            <h4>Nuestras redes sociales</h4>
            <li>
              <Link href="#">WhatsApp</Link>
            </li>
            <li>
              <Link href="#">Instagram</Link>
            </li>
            <li>
              <Link href="#">Facebook</Link>
            </li>
            <li>
              <Link href="#">YouTube</Link>
            </li>
          </ul>
          <div>
          <h4>Ubicación</h4>
          <p>Club Mariano Moreno de Castelar</p>
          </div>
          <div>
          <h4>Contactanos</h4>
          <p>triskeltechcreactivos@gmail.com</p>
          <p>triskeltechcreactivos@gmail.com</p>
          <p>triskeltechcreactivos@gmail.com</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
