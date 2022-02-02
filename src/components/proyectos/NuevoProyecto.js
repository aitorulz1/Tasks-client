import React, {useState, useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function NuevoPoryecto() {

    // Guardar el state del formulario
    const { formulario, mostrarFormulario, agregarProyecto, errorformulario, mostrarError } = useContext(proyectoContext);

    const onClickFormulario = () => {
        mostrarFormulario()
    }

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
        if(nombre === '') {
            mostrarError();
            return;
        }

        // Agregar al state
        agregarProyecto(proyecto)

        // Reiniciar form
        guardarProyecto({
            nombre: ''
        })
    }

    return (
        <>
            <button
                type="button"
                className='btn btn-block btn-primario'
                onClick={onClickFormulario}
            >
                Nuevo poryecto
            </button>

            {
                formulario ?

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

            : null

            }
            
            {errorformulario ? <p className=''>El campo está vacío</p> : null}

        </>
    )
}
