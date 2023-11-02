import Image from 'next/image';
import Logo from '@/../public/img/logo triskel.svg';
import Link from 'next/link';
import Timeline from './components/timeline';
import {Cursos} from '@/app/data.js'

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
       {Cursos.map(curso =>{
        return (
        <div className="card"  key={curso.id}>
          <div className="card-image">
            <Image src={Logo}  className="object-cover" alt={curso.name} width={300} height={300}/>
          </div>
          <div className="card-content">
            <h3 className="course-title">{curso.name}</h3>
            <div className='px-4 py-1 m-2 card-description'>
            <p  id='profesor'>
            {curso.profesor}
            </p>
            {/* {curso.hourStart.map((hour)=>return()
            )} */}
            <p className=''>{curso.hourStart}</p>
            </div>
            <Link
              href={`/curso/${curso.id}`}
              className="btn px-4 py-1 bg-white text-white rounded  "
            >
              Descubrir más
            </Link>
          </div>
        </div>
        )
       })}
       
      </section>
    </main>
  );
}
