const Cursos = [
  {
    id: 1,
    name: 'Introducción a la tecnología',
    profesor: 'Lorena Mazza',
    classes: [
      {
        day: 'Martes',
        hourStart: '16:00',
        hourEnd: '18:00',
      },
      {
        day: 'Martes',
        hourStart: '18:00',
        hourEnd: '20:00',
      },
    ],
    image: '/../public/img/vuelta al mundo.jpg',
  },
  {
    id: 2,
    name: 'Robótica I',
    profesor: 'Lorena Mazza',
    classes: [
      {
        day: 'Viernes',
        hourStart: '16:00',
        hourEnd: '18:00',
      },
    ],
    image: '/../public/img/vuelta al mundo.jpg',
  },
  {
    id: 3,
    name: 'Robótica avanzada',
    profesor: 'Ariel Airoldi',
    classes: [
      {
        day: 'Miércoles',
        hourStart: '18:00',
        hourEnd: '20:00',
      },
    ],
    image: '/../public/img/arduino.jpg',
  },
  {
    id: 4,
    name: 'Programación con videojuegos',
    profesor: 'Santiago Apesteguía',
    classes: [
      {
        day: 'Jueves',
        hourStart: '18:00',
        hourEnd: '20:00',
      },
    ],
    image: '/../public/img/programacion.jpg',
  },
];

const Steam = [
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

export { Cursos, Steam };
