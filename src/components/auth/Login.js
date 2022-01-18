import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

    const[ usuario, guardarUsuario ] = useState({
        email: '',
        password: ''
    })

    const { email, password } = usuario;

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
                <h1>Iniciar Sesión</h1>

                <form onSubmit={onSubmit} >
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
                            type="text"
                            id="password"
                            name="password"
                            placeholder='password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className='btn btn-primario btn-block' value="Iniciar Sesión" />
                    </div>

                </form>
                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                    Resgitrarse
                </Link>
            </div>
        </div>
    )
}
