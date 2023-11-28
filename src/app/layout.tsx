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
        <header className="top-0 sticky">
          <Navbar></Navbar>
        </header>
        {children}
        <footer className='flex column'>
          <ul className="social-media-links ">
            <h4>Nuestras redes sociales</h4>
            <li>
              <Link href="https://wa.me/+5491127494422?text=Hola,%20Quisiera%20saber%20mas%20sobre%20TriskelTech%20y%20su%20institución%20educativa">WhatsApp</Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/triskeltechcreactivos/">Instagram</Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/triskeltechcreactivos/">Facebook</Link>
            </li>
            {/* <li>
              <Link href="#">YouTube</Link>
            </li> */}
          </ul>
          <div>
            <h4>Ubicación</h4>
            <Link href="https://www.google.com/maps/place/Club+C.+y+D.+Mariano+Moreno/@-34.652604,-58.6527208,15z/data=!4m6!3m5!1s0x95bcbf568b170f8d:0xf5e97e729848f185!8m2!3d-34.652604!4d-58.6527208!16s%2Fg%2F1q62m7rcv?entry=ttu">Club Mariano Moreno de Castelar</Link>
            <br></br>
            <Link href="https://www.google.com/maps/place/Club+C.+y+D.+Mariano+Moreno/@-34.652604,-58.6527208,15z/data=!4m6!3m5!1s0x95bcbf568b170f8d:0xf5e97e729848f185!8m2!3d-34.652604!4d-58.6527208!16s%2Fg%2F1q62m7rcv?entry=ttu">Tte. Cnel. César Cardoso 3080, Castelar, Provincia de Buenos Aires</Link>
          </div>
          <div>
            <h4>Contactanos</h4>
            <p>triskeltechcreactivos@gmail.com</p>
            <p>+5491127494422</p>
            <p>+5491132650545</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
