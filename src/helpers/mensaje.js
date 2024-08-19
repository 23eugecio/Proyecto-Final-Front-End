import data from '../Data/contactsData';
import { obtenerMensajes } from './mensaje';
import { agregarMensajes } from './mensaje';

export const obtenerDatosPorId = (id) => {
    return data.find(contacto => Number(contacto.id) === Number(id));
}


export const obtenerMensajes = () => {
    const Mensajes_guardados = localStorage.getItem('DATA_CONTACTOS');
    return JSON.parse(Mensajes_guardados);
} 


export const agregarMensajes = (nuevoMensaje) => {
    let mensajesGuardados = obtenerMensajes() || [];
    mensajesGuardados.push(nuevoMensaje);
    localStorage.setItem('DATA_CONTACTOS', JSON.stringify(mensajesGuardados));
} 
