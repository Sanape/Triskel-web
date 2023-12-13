'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

function Timeline() {
  const itemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        root: null, // null means it's the viewport
        rootMargin: '0px',
        threshold: 0.1, // adjust this if you want the event to fire when the element is closer or farther from the viewport
      }
    );

    const currentItems = itemsRef.current;
    // En este código, currentItems es una constante que captura el valor actual de itemsRef.current cada vez que se ejecuta el efecto. Luego, en la función de limpieza, utilizamos currentItems en lugar de itemsRef.current, asegurándonos de que estamos utilizando el valor que itemsRef.current tenía en el momento en que se ejecutó el efecto.

    currentItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      currentItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  const addToRefs = (el: HTMLLIElement) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const data = [
    {
      timeClassName: 'time1',
      title: 'Science (Ciencia)',
      imgSrc: '/img/Ciencia-STEAM.png',
      imgAlt: 'Logo Ciencia',
      desc: 'Con una base sólida en ciencia, los estudiantes pueden desarrollar un pensamiento crítico y analítico que les permitirá entender y resolver problemas complejos, fomentando así su creatividad e innovación en áreas científicas y tecnológicas.',
    },
    {
      timeClassName: 'time2',
      title: 'Technology (Tecnología)',
      imgSrc: '/img/Tecnologia-STEAM.png',
      imgAlt: 'Logo Tecnología',
      desc: 'Al dominar las habilidades tecnológicas, los estudiantes pueden adaptarse a un mundo que está en constante cambio y en el que la tecnología juega un papel cada vez más importante.',
    },
    {
      timeClassName: 'time3',
      title: 'Engineering (Ingeniería)',
      imgSrc: '/img/Ingenieria-STEAM.png',
      imgAlt: 'Logo Ingeniería',
      desc: 'Esencial en la educación STEAM porque proporciona el conjunto de habilidades necesario para diseñar y construir soluciones a problemas reales. La ingeniería combina los principios de la ciencia y la matemática con la práctica de diseño para crear soluciones innovadoras.',
    },
    {
      timeClassName: 'time4',
      title: 'Art (Arte)',
      imgSrc: '/img/Arte-STEAM.png',
      imgAlt: 'Logo Arte',
      desc: 'La expresión artistica ayuda a los estudiantes a ver las cosas desde diferentes perspectivas, a pensar fuera de la caja y a encontrar soluciones creativas a los problemas además de mejorar el aprendizaje a través de sus propias experiencias.',
    },
    {
      timeClassName: 'time5',
      title: 'Mathematics (Matemática)',
      imgSrc: '/img/Matematicas-STEAM.png',
      imgAlt: 'Logo Matemática',
      desc: 'Las matemáticas ayudan a los estudiantes a desarrollar habilidades de pensamiento lógico y crítico, a resolver problemas y a tomar decisiones basadas en datos. Además, el dominio de las matemáticas es esencial para muchas carreras en ciencia, tecnología e ingeniería.',
    },
  ];
  return (
    <section className="timeline">
      {/* //TODO: Convertir en ejercicio para probar Maquetadores */}
      <ul>
        {data.map((item, index) => (
          <li key={index} ref={addToRefs}>
            <div>
              <time className={item.timeClassName}>
                <strong>{item.title.charAt(0)}</strong>
                {item.title.slice(1)}
              </time>
              <div className="discovery">
                <Image
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  width="200"
                  height="200"
                ></Image>
              </div>
              <div className="scientist">
                <span>{item.desc}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Timeline;
