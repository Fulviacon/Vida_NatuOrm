import { useState, useEffect } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function Form ({ updatePerson, editingId }) {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    donacion: '',
    mensaje: ''
  })

  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (editingId !== null) {
      setIsEditing(true)
      // Obtener los datos de la persona que se está editando
      // y llenar el formulario con esos datos
      fetch(`http://localhost:3000/persona/${editingId}`)
        .then(response => response.json())
        .then(data => {
          setFormData(data)
        })
        .catch(error => {
          console.error('Error al obtener datos de la persona a editar:', error)
        })
    } else {
      setIsEditing(false)
      setFormData({
        nombreApellido: '',
        donacion: '',
        mensaje: ''
      })
    }
  }, [editingId])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isEditing) {
      // Si estamos en modo de edición, llamamos a la función de actualización
      updatePerson(formData)
    } else {
      // Si no estamos en modo de edición, agregamos una nueva persona
      try {
        const response = await fetch('http://localhost:3000/persona', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })

        if (response.status === 201) {
          // Persona creada correctamente, puedes mostrar una notificación o hacer algo más
          console.log('Persona creada correctamente')
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Persona Creada correctamente',
            showConfirmButton: false,
            timer: 1200
          })
        } else {
          // Manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario
          console.error('Error al crear persona.')
        }
      } catch (error) {
        console.error('Error al crear persona:', error)
      }
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="div_nombre">
        <h1 className='h1__donaciones tituloForm text'>Donaciones</h1>
        <label className='labelNombreApellido' htmlFor="nombreApellido">Nombre y Apellido</label> <br />
        <input
          className="input_name"
          type="text"
          id="nombreApellido"
          name="nombreApellido"
          value={formData.nombreApellido}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="div_donacion">
        <label className='labelDonacion' htmlFor="donacion">Donacion</label> <br />
        <input
          className="input_donacion"
          type="text"
          id="donacion"
          name="donacion"
          value={formData.donacion}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="div_mensaje">
        <label className='labelMensaje' htmlFor="mensaje">Mensaje</label> <br />
        <input
          className="input_mensaje"
          type="text"
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleInputChange}
          required
        />
      </div>
      <br />
      <button className="submit" type="submit">
        {isEditing ? 'Actualizar Donación' : 'Enviar Donación'}
      </button>
    </form>
  )
}

export default Form
