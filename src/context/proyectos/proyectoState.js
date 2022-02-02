import React, { useReducer } from 'react'

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'

import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO
} from '../../types'



const ProyectoState = props => {
    
    const proyectos = [
        {id: 1, nombre: "Tienda Virtual"},
        {id: 2, nombre: "Intranet"},
        {id: 3, nombre: "Diseño web"},
    ]

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(proyectoReducer, initialState);

    // Agregar funciones para el CRUD de proyectos
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    const agregarProyecto = proyecto => {
        dispatch({
            type: AGREGAR_PROYECTO, 
            payload: proyecto
        })
    }

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
    
}

export default ProyectoState;