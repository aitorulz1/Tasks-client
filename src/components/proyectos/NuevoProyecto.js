import React, {useState} from 'react'

export default function NuevoPoryecto() {

    // State Proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre:""
    });

    // Extraer nombre de Poryecto
    const { nombre } = proyecto;
    
    // Lee los contenidos del input
    const onChange = e => {
        guardarProyecto({
            ...nombre,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario envía un proyecto
    const onSubmit = e => {
        e.preventDefault();

        // Validar el proyecto
        

        // Agregar al state

        // Reiniciar form
    }

    return (
        <>
            <button
                type="button"
                className='btn btn-block btn-primario'
            >
                Nuevo poryecto
            </button>

            <form
                onSubmit={onSubmit}
                className='formulario-nuevo-proyecto'
            >
                <input
                    type="text"
                    className='input-text'
                    placeholder='Nuevo Proyecto'
                    name="nombre"
                    value={nombre}
                    onChange={onChange}
                />
                
                <input
                    type="submit"
                    className='btn btn-primario btn-block'
                    value="Agregar Proyecto"
                />
            </form>


        </>
    )
}
