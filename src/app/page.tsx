import Image from 'next/image';
import Logo from '@/../public/img/logo triskel alt.svg';
import Link from 'next/link';
import Timeline from './components/timeline';
import {Cursos} from '@/app/data.js'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <section className="banner-section" >
        <Image src={Logo} alt="TriskelTech Logo" className="banner-image"/>
        <h1>TiskelTech +CreActivos</h1>
      </section>

      <section className="steam-section">
        <Image
          src={'/img/Educacion-STEAM.png'}
          alt="STEAM Logo"
          className="object-cover"
          width="600"
          height="600"
        />
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
            <div className='px-4 py-1 m-2 card-description '>
            <p  id='profesor'>
            {curso.profesor}
            </p>
            <div className='flex'>
              {curso.classes.map((curso, i) =>{
                return(
                  <div key={i} className='m-1'>
                    <p>{curso.day? curso.day:'\u00a0'}</p>
                    <div className='flex'>
                    <p>{curso.hourStart}</p>
                    <p className='mx-1'>a</p>
                    <p>{curso.hourEnd}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            </div>
            <Link
              href={`/curso/${curso.id}`}
              className="btn px-4 py-2 bg-white text-white rounded"
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
