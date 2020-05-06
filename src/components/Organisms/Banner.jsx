import React from "react"

const Banner = () => (
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://www.xtrafondos.com/descargar.php?id=3963&resolucion=3840x2160" alt="imagen" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de EDteam</p>
            <p> Tú futuro te está esperando</p>
            <a href="https://ed.team" className="button third-color">Suscribirse</a>
          </div>
        </div>
      </div>
    </div>
)

export default Banner