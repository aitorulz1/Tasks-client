import React from 'react'
import Proyecto from './Proyecto'

export default function Listado() {

    const proyectos = [
        {nombre: "Tienda Virtual"},
        {nombre: "Intranet"},
        {nombre: "Diseño web"},
    ]

    return (
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto => (
                <Proyecto
                    proyecto={proyecto}
                />
            ))}
        </ul>
    )
}
