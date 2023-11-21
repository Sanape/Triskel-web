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

  return (
    <section className="timeline">
      <ul>
        {/* //TODO: Convertir en ejercicio para probar Maquetadores */}
        <li ref={addToRefs}>
          {''}
          <div>
            <time className="time1">
              <strong>S</strong>cience (Ciencia)
            </time>
            <div className="discovery">
              <Image
                src={'/img/Ciencia-STEAM.png'}
                alt={'Logo Ciencia'}
                width="200"
                height="200"
              ></Image>
            </div>
            <div className="scientist">
              {/* <span>
                Desempeña un papel vital en la metodología STEAM ya que es la
                base para comprender el mundo que nos rodea. La ciencia nos
                proporciona el conocimiento y la comprensión de los fenómenos
                naturales y de cómo funciona el universo, desde los principios
                fundamentales de la física hasta la complejidad de los sistemas
                biológicos. Con una base sólida en ciencia, los estudiantes
                pueden desarrollar un pensamiento crítico y analítico que les
                permitirá entender y resolver problemas complejos, fomentando
                así su creatividad e innovación en áreas científicas y
                tecnológicas.
              </span> */}
              <span>
                Con una base sólida en ciencia, los estudiantes
                pueden desarrollar un pensamiento crítico y analítico que les
                permitirá entender y resolver problemas complejos, fomentando
                así su creatividad e innovación en áreas científicas y
                tecnológicas.
              </span>
            </div>
          </div>
        </li>
        <li ref={addToRefs}>
          {' '}
          <div>
            <time className="time2">
              <strong>T</strong>echnology (Tecnología)
            </time>
            <div className="discovery">
              <Image
                src={'/img/Tecnologia-STEAM.png'}
                alt={'Logo Tecnología'}
                width="200"
                height="200"
              ></Image>
            </div>
            <div className="scientist">
              <span>
                {/* Crucial en la educación ya que es una herramienta que permite
                implementar y aplicar los conocimientos adquiridos en ciencia.
                La tecnología también ofrece nuevas formas de aprender, enseñar
                y comunicarse, proporcionando un acceso sin precedentes a la
                información y a las oportunidades de aprendizaje.  */}
                Al dominar las habilidades tecnológicas, los estudiantes pueden adaptarse a un
                mundo que está en constante cambio y en el que la tecnología
                juega un papel cada vez más importante.
              </span>
            </div>
          </div>
        </li>
        <li ref={addToRefs}>
          {''}
          <div>
            <time className="time3">
              <strong>E</strong>ngineering (Ingeniería)
            </time>
            <div className="discovery">
              <Image
                src={'/img/Ingenieria-STEAM.png'}
                alt={'Logo Ingeniería'}
                width="200"
                height="200"
              ></Image>
            </div>
            <div className="scientist">
              <span>
                Esencial en la educación STEAM porque proporciona el conjunto de
                habilidades necesario para diseñar y construir soluciones a
                problemas reales. La ingeniería combina los principios de la
                ciencia y la matemática con la práctica de diseño para crear
                soluciones innovadoras. 
                {/* Al aprender sobre ingeniería, los
                estudiantes no solo adquieren habilidades técnicas, sino que
                también desarrollan habilidades de pensamiento crítico,
                resolución de problemas y trabajo en equipo que son esenciales
                en el siglo XXI. */}
              </span>
            </div>
          </div>
        </li>
        <li ref={addToRefs}>
          {' '}
          <div>
            <time className="time4">
              <strong>A</strong>rt (Arte)
            </time>
            <div className="discovery">
              <Image
                src={'/img/Arte-STEAM.png'}
                alt={'Logo Arte'}
                width="200"
                height="200"
              ></Image>
            </div>
            <div className="scientist">
              <span> 
                La expresión artistica ayuda a los estudiantes a ver las cosas desde diferentes
                perspectivas, a pensar fuera de la caja y a encontrar soluciones
                creativas a los problemas además de mejorar el aprendizaje a través de
                sus propias experiencias
              </span>
            </div>
          </div>
        </li>
        <li ref={addToRefs}>
          {' '}
          <div>
            <time className="time5">
              <strong>M</strong>athematics (Matemática)
            </time>
            <div className="discovery">
              <Image
                src={'/img/Matematicas-STEAM.png'}
                alt={'Logo Matemática'}
                width="200"
                height="200"
              ></Image>
            </div>
            <div className="scientist">
              <span>
                Las matemáticas ayudan a los estudiantes a desarrollar habilidades
                de pensamiento lógico y crítico, a resolver problemas y a tomar
                decisiones basadas en datos. Además, el dominio de las
                matemáticas es esencial para muchas carreras en ciencia,
                tecnología e ingeniería.
              </span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Timeline;
