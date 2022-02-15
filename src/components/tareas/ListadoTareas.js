import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';

import proyectoContext from '../../context/proyectos/proyectoContext';

export default function ListadoTareas() {

    const { proyecto, proyectoEliminado } = useContext(proyectoContext);
    
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;        
    
    // Array Destructuring para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    const tareasProyecto = [
        {nombre: 'Elegir Plataform', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir Plataform de pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true},
    ]
    console.log(proyectoActual.id)

        
    return (
    <Fragment>

      <h2>Proyecto: {proyectoActual.nombre}</h2>
    
        <ul className='listado-tareas'>
            {tareasProyecto.length === 0
            ? (<li className='tarea'><p>No hay tareas</p></li>) 
            : tareasProyecto.map(tarea => (
                <Tarea
                key={tarea.nombre}
                tarea={tarea}
                />
                ))
            }
        </ul>

        <button
            type='button'
            className='btn btn-eliminar'
            onClick={() => proyectoEliminado(proyectoActual.id)}
        >Eliminas Proyecto &times;</button>

    </Fragment>
    );

}  