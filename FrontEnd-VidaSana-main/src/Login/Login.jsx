import { useState } from 'react'
import './Login.css'

function Login () {
  const [formRegisterStyle, setFormRegisterStyle] = useState({ display: 'none' })
  const [formLoginStyle, setFormLoginStyle] = useState({ display: 'block' })
  const [contenedorStyle, setContenedorStyle] = useState({ left: '0px' })
  const [cajaTraseraRegisterStyle, setCajaTraseraRegisterStyle] = useState({ opacity: 1 })
  const [cajaTraseraLoginStyle, setCajaTraseraLoginStyle] = useState({ opacity: 0 })

  const iniciarSesion = () => {
    setFormRegisterStyle({ display: 'none' })
    setContenedorStyle({ left: '0px' })
    setFormLoginStyle({ display: 'block' })
    setCajaTraseraRegisterStyle({ opacity: 1 })
    setCajaTraseraLoginStyle({ opacity: 0 })
  }

  const register = () => {
    setFormRegisterStyle({ display: 'block' })
    setContenedorStyle({ left: '410px' })
    setFormLoginStyle({ display: 'none' })
    setCajaTraseraRegisterStyle({ opacity: 0 })
    setCajaTraseraLoginStyle({ opacity: 1 })
  }

  // inicio de sesion
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const response = await fetch('url de la base de datos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      const data = await response.json()
      console.log('Respuesta', data)
    } catch (error) {
      console.error('Error de enviar datos', error)
    }
    console.log('form iniciar sesion', values)
  }

  function handleChange (evt) {
    const { target } = evt
    const { name, value } = target

    const newValues = {
      ...values,
      [name]: value
    }
    setValues(newValues)
  }

  // registrarse
  const [valuesRegister, setValuesRegister] = useState({
    nombreCompleto: '',
    usuario: '',
    email: '',
    password: ''
  })

  const handleSubmitRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('url de la base de datos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(valuesRegister)
      })
      const data = await response.json()
      console.log('Respuesta', data)
    } catch (error) {
      console.error('Error de enviar datos', error)
    }
    console.log('form register', valuesRegister)
  }

  function handleChangeRegister (e) {
    const { target } = e
    const { name, value } = target

    const newRegisterValues = {
      ...valuesRegister,
      [name]: value
    }
    setValuesRegister(newRegisterValues)
  }

  return (
    <div className="login">
      <div className="contenedor-todo">
        <div className="caja-trasera">
          <div className="caja-trasera-login" style={cajaTraseraLoginStyle}>
            <h3>Ya tienes una cuenta?</h3>
            <p>Inicia sesion para poder iteraccionar</p>
            <button id="btn-iniciar-sesion" onClick={iniciarSesion}>Iniciar sesion</button>
          </div>
          <div className="caja-trasera-register" style={cajaTraseraRegisterStyle}>
            <h3>Aun no tienes una cuenta?</h3>
            <p>registrate para iniciar sesion</p>
            <button id="bt-registrarse" onClick={register}>Registrarse</button>
          </div>
        </div>

        <div className="contenedor-login-register" style={contenedorStyle} >

          <form onSubmit={handleSubmit} className="formulario-login" style={formLoginStyle}>
          <h2>Iniciar Sesion</h2>
          <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Correo Electronico" />
          <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Contraseña" />
          <button type="submit">Ingresar</button>
          </form>

          <form onSubmit={handleSubmitRegister} className="formulario-register" style={formRegisterStyle}>
          <h2>Registrarse</h2>
          <input
          id="nombreCompletoRegister"
          name="nombreCompleto"
          type="text"
          value={valuesRegister.nombreCompleto}
          onChange={handleChangeRegister}
          placeholder="Nobre Completo"/>
          <input
          id="emailRegister"
          name="email"
          type="email"
          value={valuesRegister.email}
          onChange={handleChangeRegister}
          placeholder="Correo Electronico" />
          <input
          id="usuarioRegister"
          name="usuario"
          type="text"
          value={valuesRegister.usuario}
          onChange={handleChangeRegister}
          placeholder="Usuario" />
          <input
          id="passwordRegister"
          name="password"
          type="password"
          value={valuesRegister.password}
          onChange={handleChangeRegister}
          placeholder="Contraseña" />
          <button type="submit">Regitrarse</button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Login
