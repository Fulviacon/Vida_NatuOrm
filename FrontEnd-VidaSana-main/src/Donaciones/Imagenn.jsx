import { useEffect, useState } from 'react'

function Imagenn() {
  const [picture, setPicture] = useState(null)

  useEffect(() => {
    // Realizar la solicitud Fetch a la URL deseada
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        // Extraer la propiedad "picture" del JSON de respuesta
        const pictureUrl = data.results[0].picture.large
        setPicture(pictureUrl)
      })
      .catch((error) => {
        console.error('Error al obtener la imagen:', error)
      })
  }, [])

  return (
    <div>
      {picture
        ? (
          <img className='imagen' src={picture} alt="Imagen de usuario" />
        )
        : (
          <p>Cargando imagen...</p>
        )}
    </div>
  )
}

export default Imagenn
