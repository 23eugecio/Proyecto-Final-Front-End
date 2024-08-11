import data from '../Data/contactsData';

export const obtenerDatosPorId = (id) => {
    return data.find(contactos => Number(contactos.id) === Number(id));
}

export const obtenerMensajes = () => {
    const Mensajes_guardados = localStorage.getItem('DATA_CONTACTOS');
console.log(Mensajes_guardados)
} 