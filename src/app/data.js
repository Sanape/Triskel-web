const Cursos = [
    {
        id: 1,
        name: 'Introducción a la tecnología',
        profesor: 'Lorena Mazza',
        classes:[{
            day: 'Martes',
            hourStart:'16:00',
            hourEnd: '18:00',
        },
        {
            day: 'Martes',
            hourStart: '18:00',
            hourEnd: '20:00',
        }
    ],
        image:'img/clases/programacion/logo.png',
    },
    {
        id: 2,
        name: 'Robótica I',
        profesor: 'Lorena Mazza',
        classes:[{
            day: 'Viernes',
            hourStart: '16:00',
            hourEnd: '18:00',
        }],
        image:'img/clases/programacion/logo.png',
    },
    {
        id: 3,
        name: 'Robótica avanzada',
        profesor: 'Ariel Airoldi',
        classes:[{
            day: 'Miércoles',
            hourStart: '18:00',
            hourEnd: '20:00',
        }],
        image:'img/clases/programacion/logo.png',
    },
    {
        id: 4,
        name: 'Programación con videojuegos',
        profesor: 'Santiago Apesteguía',
        classes:[{
            day: 'Jueves',
            hourStart: '18:00',
            hourEnd: '20:00',
        }],
        image:'img/clases/programacion/logo.png',
    }
]

export {Cursos}