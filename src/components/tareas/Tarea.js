import React from 'react';

export default function Tarea({tarea}) {
    
    const {nombre, estado} = tarea;
  
    return (    
        <li className='tarea simbra'>
            <p>{nombre}</p>
        
            <div className='estado'>
                {estado 
                    ? 
                (<button type="button" className='completo'>Completo</button>) 
                    : 
                (<button type="button" className='incompleto'>Incompleto</button>)
                }
            </div>

            <div className='acciones'>
                <button
                    type="button"
                    className='btn btn-primario'
                >
                    Editar
                </button>
                <button
                    type="button"
                    className='btn btn-secundario'
                >
                    Eliminar
                </button>
            </div>

            
        </li>
  );
}
