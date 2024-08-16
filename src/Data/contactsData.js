export const DATA_CONTACTOS = [
    {
        nombre: 'Matilda',
        thumbnail: '/Imagenes/girl-curly.webp',
        ultima_conexion: 'Hoy',
        id: 1,
        mensajes: [
            {
                author: 'yo',
                text: 'Hola, a qué hora salís del cole hoy?',
                estado: 'visto',
                day: 'hoy',
                hour: '13:15',
                id: 1
            },
            {
                author: 'Matilda',
                text: 'Hola, a las 14:20, igual que todos los lunes',
                estado: 'visto',
                day: 'hoy',
                hour: '13:20',
                id: 2
            }
        ],
    },
    {
        nombre: 'Benito',
        thumbnail: '/Imagenes/happy-3d-student-boy.webp',
        ultima_conexion: 'Hoy',
        id: 2,
        mensajes: [
            {
                author: 'yo',
                text: 'Hola, ¿me podés responder?',
                estado: 'visto',
                day: 'ayer',
                hour: '15:50',
                id: 1
            }
        ],
    },
    {

        nombre: 'Dante',
        thumbnail: '/Imagenes/dante.avif',
        ultima_conexion: 'Hoy',
        estado: 'offline',
        id: 3,
        mensajes: [
            {
                author: 'yo',
                text: 'Hola, ¿podrías venir a la fiesta?',
                estado: 'visto',
                day: 'ayer',
                hour: '18:30',
                id: 1
            },
            {
                author: 'Dante',
                text: 'Hola, creo que puedo ir pero te aviso',
                estado: 'visto',
                day: 'hoy',
                hour: '18:40',
                id: 2
            },
            {
                author: 'yo',
                text: 'Ok, espero tu confirmación',
                estado: 'visto',
                day: 'hoy',
                hour: '19:00',
                id: 3
            }
        ],
    },
    {
        nombre: 'Lewis',
        thumbnail: '/Imagenes/hamilton.webp',
        ultima_conexion: 'Hoy',
        estado: 'offline',
        id: 4,
        mensajes: [
            {
                author: 'yo',
                text: 'Hello, how are you?',
                estado: 'visto',
                day: 'ayer',
                hour: '18:30',
                id: 1
            },
            {
                author: 'Lewis',
                text: 'I am good, what about you?',
                estado: 'visto',
                day: 'ayer',
                hour: '18:40',
                id: 2
            },
            {
                author: 'yo',
                text: 'I am good too, congrats for the race today, you are the best!',
                estado: 'visto',
                day: 'ayer',
                hour: '19:00',
                id: 3
            }
        ],
    },

    {
        nombre: 'Antonio',
        thumbnail: '/Imagenes/pepe-pic.webp',
        ultima_conexion: 'Hoy',
        estado: 'offline',
        id: 5,
        mensajes: [
            {
                author: 'yo',
                text: '¿Qué comemos hoy?',
                estado: 'visto',
                day: 'ayer',
                hour: '13:15',
                id: 1
            },
            {
                author: 'Antonio',
                text: 'Vamos a comer comida árabe al Emir',
                estado: 'visto',
                day: 'hoy',
                hour: '13:20',
                id: 2
            },
            {
                author: 'yo',
                text: '¡Buenísimo, me encantó!',
                estado: 'visto',
                day: 'hoy',
                hour: '13:30',
                id: 3
            }
        ],
    },
    {
        nombre: 'Pepe',
        thumbnail: '/Imagenes/canario.webp',
        ultima_conexion: 'ayer',
        id: 6,
        mensajes: [
            {
                author: 'yo',
                text: 'Hola, ¿como estas?',
                estado: 'visto',
                day: 'ayer',
                hour: '15:50',
                id: 1
            }
        ],
    }
];

export default DATA_CONTACTOS;