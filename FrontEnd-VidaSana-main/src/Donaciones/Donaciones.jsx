import { useEffect, useState } from 'react'
import Imagenn from './Imagenn'
import Form from './Form'
import './Donaciones.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function Donaciones () {
  const URL = 'http://localhost:3000/persona'
  const [data, setData] = useState([])
  const [editingId, setEditingId] = useState(null)

  const fetchData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error al obtener datos:', error))
  }

  useEffect(() => {
    fetchData()
    console.log(data)
    console.log('Renderizado Completado')
  }, [])

  const handleDeleteClick = (id) => {
    // Enviar la solicitud de eliminación al servidor
    fetch(`http://localhost:3000/persona/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.status === 200) {
          // Eliminación exitosa, actualiza los datos
          fetchData()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Persona eliminada correctamente',
            showConfirmButton: false,
            timer: 1200
          })
        } else {
          console.error('Error al eliminar persona.')
          Swal.fire({
            position: 'top-end',
            icon: 'Error',
            title: 'Error al eliminar Persona',
            showConfirmButton: false,
            timer: 1200
          })
          console.log(response.status)
        }
      })
      .catch((error) => console.error('Error al eliminar persona:', error))
  }

  const handleEditClick = (id) => {
    // Buscar la persona a editar en los datos actuales
    const personaToEdit = data.find((persona) => persona.id === id)

    if (personaToEdit) {
      // Establecer los datos de la persona a editar en el formulario
      setEditingId(id)
      // Esto permitirá que el formulario se rellene con los datos de la persona a editar
    } else {
      console.error('Persona no encontrada para editar.')
    }
  }

  // Función para actualizar la persona
  const handleUpdatePerson = async (updatedPerson) => {
    try {
      const response = await fetch(`http://localhost:3000/persona/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPerson)
      })

      if (response.status === 204) {
        // Actualización exitosa, limpiar el estado de edición y actualizar los datos
        setEditingId(null)
        fetchData()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Persona actualizada correctamente',
          showConfirmButton: false,
          timer: 1200
        })
      } else {
        console.error('Error al editar persona.')
      }
    } catch (error) {
      console.error('Error al editar persona:', error)
    }
  }

  return (
    <div className="container">
      <Form className="form" updatePerson={handleUpdatePerson} editingId={editingId} />
      <ul className="ul">
        {data.map((persona) => {
          // Obtener la última donación y mensaje
          const ultimaDonacion = persona.donaciones.length > 0 ? persona.donaciones[persona.donaciones.length - 1] : null
          const ultimoMensaje = persona.mensaje.length > 0 ? persona.mensaje[persona.mensaje.length - 1] : null
          const longitudDonaciones = persona.donaciones.length

          return (
            <li className="card" key={persona.idPersona}>
              {longitudDonaciones > 0
                ? (
                <h2 className="multiplicador_donaciones">x{longitudDonaciones}</h2>
                  )
                : (
                <h2 className="hidden"></h2>
                  )}
              <Imagenn />
              <h2 className="h2">{persona.nombreApellido}</h2>
              <h3 className="h3">
                {ultimaDonacion ? `$${ultimaDonacion.monto}` : 'Sin donaciones'}
              </h3>
              <h4 className="h4">
                {ultimoMensaje ? ultimoMensaje.mensaje : 'Sin mensaje'}
              </h4>
              <div>
                <button
                  className="button editar"
                  onClick={() => handleEditClick(persona.idPersona)}
                >
                  Editar
                </button>
                <button
                  className="button eliminar"
                  onClick={() => handleDeleteClick(persona.idPersona)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default Donaciones
