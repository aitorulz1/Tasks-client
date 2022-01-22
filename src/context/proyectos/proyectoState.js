import React, { useReducer } from 'react'

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'

const ProyectoState = props => {
    const initialState = {
        formulario : false
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(proyectoReducer, initialState);


    // Agregar funciones para el CRUD de proyectos

    return(
        <proyectoContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
    
}

export default ProyectoState;