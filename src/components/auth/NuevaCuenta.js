import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function NuevaCuenta() {

    const[ usuario, guardarUsuario ] = useState({
        usuario: '',
        email: '',
        password: '',
        confirmar: ''
    })

    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario ({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Registrase</h1>

                <form onSubmit={onSubmit} >
                    <div className='campo-form'>
                        <label>Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder='nombre'
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label>Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder='email'
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    
                    <div className='campo-form'>
                        <label>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    
                    <div className='campo-form'>
                        <label>Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder='confirmar'
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className='btn btn-primario btn-block' value="Registrarse" />
                    </div>

                </form>
                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    )
}
