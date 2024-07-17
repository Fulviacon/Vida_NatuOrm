import React from 'react'
import './Contaminacion.css'

function Contaminacion() {
  return (
    <div className="informacion">
      <div className="titulo-principal">
        <h1>Problemas Ambientales Urgentes</h1>
      </div>
      <div className="tarjetaInfo">
        <div className="tarjeta-Img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZf1bwcuw9Dcutu-aKjY5vMGlMEmd6jH9sjw&usqp=CAU"
            alt="Cambio Climático"
            className="imagen-problema" />
        </div>
        <div className="tarjeta-text">
          <h2>CAMBIO CLIMATICO</h2>
          <p>El cambio climático se refiere a una variación significativa en los componentes del clima cuando se comparan períodos prolongados, pudiendo ser décadas o más. Por ejemplo, la temperatura media de la década del 50 con respecto a la temperatura media de la década del 90.

            El clima de la Tierra ha variado muchas veces a lo largo de su historia debido a cambios naturales, como las erupciones volcánicas, los cambios en la órbita de traslación de la tierra, las variaciones en la composición de la atmósfera, entre otros.
            <br />
            <br />
            Pero, desde los últimos años del siglo XIX, la temperatura media de la superficie terrestre ha aumentado más de 0,6 ºC. Este aumento está vinculado al proceso de industrialización iniciado hace más de un siglo y, en particular, a la combustión de cantidades cada vez mayores de petróleo y carbón, la tala de bosques y algunos métodos de explotación agrícola.</p>
        </div>
      </div>

      <div className="tarjetaInfo">
        <div className="tarjeta-text">
          <h2>CONTAMINACION GENERAL</h2>
          <p>Las zonas deforestadas en Argentina se han incrementado sustancialmente en los últimos 20 años y la desaparición de gran parte del área boscosa, sin intención de nuevas plantaciones, agrava la crisis climática. Desde 2001 hasta 2021, el 80% de la masa forestal local eliminada estuvo directamente vinculada con los sectores dominantes que responden a la deforestación, según relevó la plataforma de monitoreo de bosques Global Forest Watch.

            Durante ese período, el país perdió 438 mil hectáreas de bosque primario húmedo, lo que representa el 7% de la pérdida total de cobertura arbórea y una disminución de esa flora nativa del 9,9%.

            Entre las actividades que generaron mayor índice de pérdida forestal en el país, la deforestación asociada a la obtención de materias primas como postes de luz, tanino, durmientes o carbón encabezó la lista, con 151 mil hectáreas menos en 2021 que en 2001. Le siguieron la agricultura itinerante, que dejó en ese mismo año un saldo de 25 mil hectáreas taladas de las 200 mil que hubo en total, según informó el organismo.

          </p>
        </div>
        <div className="tarjeta-Img">
          <img src="https://www.shutterstock.com/image-photo/industry-metallurgical-plant-dawn-smoke-600nw-1721153281.jpg"
            alt="Deforestación"
            className="imagen-problema" />
        </div>
      </div>
    </div>
  )
}

export default Contaminacion
