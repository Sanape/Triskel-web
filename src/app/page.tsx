'use client'

import Image from 'next/image';
import Logo from '@/../public/img/logo triskel naranja.svg';
import Link from 'next/link';
import Timeline from './components/timeline';
import {Cursos} from '@/app/data.js'
import { useState, useRef, useEffect} from 'react';

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const [reload, setReload] = useState(true);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setAnimate(true);
    setReload(false);
    if (imageRef.current) {
      imageRef.current.classList.add('animate');
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.classList.remove('animate');
        }
      }, 2000); // 2000ms is the duration of the spin animation
    }
  };

  const handleMouseOut = () => {
    if (imageRef.current) {
      imageRef.current.classList.add('spinback');
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.classList.remove('spinback');
        }
      }, 2000); // 2000ms is the duration of the spin animation
    }
   };

  useEffect(() => {
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.classList.remove('reload');
        }
      }, 2000); // 2000ms is the delay before the class is removed
   }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-6">
           <section className="banner-section" >
       <div ref={imageRef} className={`banner-image ${reload ? 'reload' : ''} ${animate ? 'animate' : ''}`}>
         <Image src={Logo} alt="TriskelTech Logo" onClick={handleClick} onMouseOut={handleMouseOut}/>
       </div>
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

      <section className="course-section p-10">
       {Cursos.map(curso =>{
        return (
        <div className="card"  key={curso.id}>
          <div className="card-image">
            <Image src={curso.image}  className="object-cover" alt={curso.name} width={300} height={300}/>
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
