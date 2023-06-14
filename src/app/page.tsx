import Image from 'next/image';
import Logo from '../../public/img/logo-triskel limpio.png';
import Link from 'next/link';
import Timeline from './components/timeline';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <section className="banner-section">
        <div className="image-container">
          <Image src={Logo} alt="TriskelTech Logo" className="object-cover" />
        </div>
        <h1>TiskelTech +CreActivos</h1>
        <Image
          src={'/img/Educacion-STEAM.png'}
          alt="STEAM Logo"
          className="object-cover"
          width="600"
          height="600"
        />
      </section>

      <section className="steam-section">
        <Timeline></Timeline>
      </section>

      <section className="course-section p-24">
        <div className="card">
          <div className="card-image">
            <Image src={Logo} alt="TriskelTech Logo" className="object-cover" />
          </div>
          <div className="card-content">
            <h3>Card Title 1</h3>
            <p className="card-description px-4 py-1 m-2">
              Card description goes here.
            </p>
            <Link
              href="/button-link"
              className="btn px-4 py-1 bg-white text-white rounded  "
            >
              Descubrir más
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <Image src={Logo} alt="TriskelTech Logo" className="object-cover" />
          </div>
          <div className="card-content">
            <h3>Card Title 1</h3>
            <p className="card-description px-4 py-1 m-2">
              Card description goes here.
            </p>
            <Link
              href="/button-link"
              className="btn px-4 py-1 bg-white text-white rounded  "
            >
              Descubrir más
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <Image src={Logo} alt="TriskelTech Logo" className="object-cover" />
          </div>
          <div className="card-content">
            <h3>Card Title 1</h3>
            <p className="card-description px-4 py-1 m-2">
              Card description goes here.
            </p>
            <Link
              href="/button-link"
              className="btn px-4 py-1 bg-white text-white rounded  "
            >
              Descubrir más
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <Image src={Logo} alt="TriskelTech Logo" className="object-cover" />
          </div>
          <div className="card-content">
            <h3>Card Title 1</h3>
            <p className="card-description px-4 py-1 m-2">
              Card description goes here.
            </p>
            <Link
              href="/button-link"
              className="btn px-4 py-1 bg-white text-white rounded  "
            >
              Descubrir más
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
