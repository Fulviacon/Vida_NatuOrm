import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="inicio">
        <div className="inicioContenido">
          <h1>ONG Vida Natural </h1>
          <p>Nuestra ONG "Vida Natural" es una entidad civil fundada el 29 de junio de 2010, que trabaja en la solución de los principales problemas ambientales de Argentina. Nuestra misión es "proponer e implementar soluciones para conservar la naturaleza, promover el uso sustentable de los recursos naturales y una conducta responsable del hombre en un contexto de cambio climático". Para esto, desarrollamos acciones basadas en la protección de áreas naturales, el consumo y la producción responsable, la legislación ambiental y la concientización y educación ambiental. Desde 2011 es la entidad representante para Argentina de la Organización Mundial de Conservación (WWF), la organización ambiental más grande del mundo. La visión de Vida Natural es "un mundo en el cual el ser humano se desarrolle en armonía con la naturaleza". En la actualidad, su trabajo se enfoca en cinco ecorregiones prioritarias de la Argentina por su rica biodiversidad que se encuentra amenazada: la selva paranaense, el Gran Chaco, las pampas, mares y costas (la Antártida y océanos australes), ríos y lagos del sur. Vida Natural posee tres oficinas, ubicadas en la Ciudad Autónoma de Buenos Aires, Puerto Iguazú y Lago Puelo. Además, cuenta con dos reservas propias: Urugua-í en Misiones, y San Pablo de Valdés, en Chubut.
          </p>
          <a href="http://localhost:5173/Donaciones" className='btn'>Realizar Donacion</a>
        </div>
      </div>
      <div className="tarjetaInfo">
        <div className="tarjeta-Img">
          <img src="/src/Home/Img/reforestacion.jpg" alt="" />
        </div>
        <div className="tarjeta-text">
          <h2>MAS ARBOLES, MAS OXIGENO</h2>
          <p>Logramos la reforestacion Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugit est laborum eum consequatur veritatis sequi esse, ipsum exercitationem sapiente repellendus illo consectetur excepturi voluptates iusto atque voluptas delectus porro?</p>
        </div>
      </div>
      <div className="tour">
        <div className="center-text">
          <h2>MAS INFORMACION</h2>
        </div>
        <div className="localidad-content">
          <div className="box">
            <img src="/src/Home/Img/reforestacion1.jpg" alt="" />
            <h6>Argentina</h6>
            <h4>Argentina Respira</h4>
          </div>
          <div className="box">
            <img src="/src/Home/Img/reforestacionjujuy.jpg" alt="" />
            <h6>Jujuy</h6>
            <h4>Plan de Reforestacion</h4>
          </div>
          <div className="box">
            <img src="/src/Home/Img/reforestacioncordoba.jpg" alt="" />
            <h6>Cordoba</h6>
            <h4>Empresas de Arboles</h4>
          </div>
        </div>
        <div className="center-btn"><a href="http://localhost:5173/Contaminacion" className='btn'>Leer Mas</a></div>
      </div>
      <div className="tarjetaInfo">
        <div className="tarjeta-text">
          <h2>PLAYAS LIMPIAS</h2>
          <p>Junto a Voluntarios logramos limpiar km de playas Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptatibus dolor doloremque commodi natus esse suscipit nesciunt quas eveniet accusantium harum mollitia obcaecati ut ipsam placeat itaque nisi aspernatur repudiandae!</p>
        </div>
        <div className="tarjeta-Img">
          <img src="/src/Home/Img/limpieza3.jpeg" alt="" />
        </div>
      </div>
      <div className="tour">
        <div className="center-text">
          <h2>MAS INFORMACION</h2>
        </div>
        <div className="localidad-content">
          <div className="box">
            <img src="/src/Home/Img/playalimpia1.jpg" alt="" />
            <h6>Argentina</h6>
            <h4>Argentina y sus playas</h4>
          </div>
          <div className="box">
            <img src="/src/Home/Img/playalimpia2.jpg" alt="" />
            <h6>MDQ</h6>
            <h4>Ciudadanos solidarios</h4>
          </div>
          <div className="box">
            <img src="/src/Home/Img/limpieza3.jpeg" alt="" />
            <h6>Villa Gesel</h6>
            <h4>Camiones de Residuos</h4>
          </div>
        </div>
        <div className="center-btn"><a href="http://localhost:5173/Contaminacion" className='btn'>Leer Mas</a></div>
      </div>
    </div>
  )
};
export default Home
