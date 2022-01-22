import React, { Fragment } from 'react';
import Tarea from './Tarea';

export default function ListadoTareas() {

        const tareasProyecto = [
            {nombre: 'Elegir Plataform', estado: true},
            {nombre: 'Elegir Colores', estado: false},
            {nombre: 'Elegir Plataform de pago', estado: false},
            {nombre: 'Elegir Hosting', estado: true},
    
        ]
        
    return (
    <Fragment>

      <h2>Proyecto: Tienda Virtual</h2>
    
        <ul className='listado-tareas'>
            {tareasProyecto.length === 0
            ? (<li className='tarea'><p>No hay tareas</p></li>) 
            : tareasProyecto.map(tarea => (
                <Tarea
                tarea={tarea}
                />
                ))
            }
        </ul>

        <button
            type='button'
            className='btn btn-eliminar'
        >Eliminas Proyecto &times;</button>

    </Fragment>
    );

}  