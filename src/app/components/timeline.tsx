'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Steam } from '@/app/data.js';

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

  return (
    <section className="timeline">
      {/* //TODO: Convertir en ejercicio para probar Maquetadores */}
      <ul>
        {Steam.map((item, index) => (
          <li key={index} ref={addToRefs}>
            <div>
              <time className={item.timeClassName}>
                <strong>{item.title.charAt(0)}</strong>
                {item.title.slice(1)}
              </time>
              <div className="image">
                <Image
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  width="200"
                  height="200"
                ></Image>
              </div>
              <div className="text">
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
