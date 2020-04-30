import React from 'react';
import "./styles/styles.scss";

const App = () => (
  <>
    <div className="Saludo">
      <h1>Hola mundo</h1>
      <p>Hola, saludando desde mi componente</p>
    </div>
    <div>
      <img src="https://statics-uestudio.uecdn.es/buhomag/2019/08/Marvel-peor-reparto-posible.jpg" alt="Avengers"/>
    </div>
  </>
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