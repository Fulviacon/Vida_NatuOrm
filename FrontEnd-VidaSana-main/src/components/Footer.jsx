import React from 'react'
import './Footer.css'

function Footer () {
  return (
    <footer className="piePagina">

  <div className="grupo1">

      <div className="box">
        <figure>
          <a href="#">
            <img src="./src/components/img/logoPropio.png" alt="" />
          </a>
        </figure>
      </div>
    <div className="box">
    <h2>SOBRE NOSOTROS</h2>
    <p>Organizacion No Gubernamental (ONG) del Mundo y sus problemas ambientales. Creada en el 2023. Somos Vida Natural</p>
    </div>

    <div className="box2">
      <h2>SIGUENOS</h2>
      <div className="redesSociales">
        <a href=""><img src="./src/components/img/Facebook.png" alt="Fb" /></a>
        <a href="#"><img src="./src/components/img/instagram.png" alt="Ig" /></a>
        <a href="#"><img src="./src/components/img/twitter.png" alt="Tw" /></a>
        <a href="#"><img src="./src/components/img/youtube.png" alt="Yb" /></a>
      </div>
    </div>
  </div>
  <div className="grupo2">
    <small>&copy; 2023 <b>Vida Natural</b> - Todos los Derechos Reservados</small>
  </div>

    </footer>
  )
}
export default Footer
