import React, {Fragment} from 'react';
import "./styles/styles.scss";
import Curso from './Curso'

const cursos = [
  {
    "title": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
    "price": 50,
    "profesor": "Beto Quiroga"
  },
  {
    "title": "Drupal desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/1a5bea38-0c7f-4ca1-ac3f-1710b1b7a5a3.png",
    "price": 40,
    "profesor": "Beto Quiroga"
  },
  {
    "title": "Go desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
    "price": 30,
    "profesor": "Alexys Lozada"
  },
  {
    "title": "HTML desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/blogs/smaller/03928ceb-64e7-4336-b18c-6f65a751de6e.jpg",
    "price": 20,
    "profesor": "Alvaro Felipe"
  }
]


const App = () => (
  <Fragment>
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
    <div className="ed-grid m-grid-3">
      {
        cursos.map( curso => <Curso title={curso.title}
                                    image={curso.image}
                                    price={curso.price}
                                    profesor={curso.profesor} />)
      }
    </div>
  </Fragment>
)

export default App;

// Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver UN solo elemento padre
// 3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
// 4: Fragment => <> hijos </>
// 5: img siempre se cierra <img src="" alt="" />
// 6: class => className
// 7: El atributo for => htmlFor
// 8: Dentro de JSX no podemos usar if, else, while