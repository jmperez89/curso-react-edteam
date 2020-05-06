import React from 'react'
import './styles/styles.scss'
import Banner from './Banner'
import Form from './Form'
import CourseGrid from './CourseGrid'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Course from './Course'
import MainMenu from './MainMenu'
// Se creo un comentario
// Se agregó un segundo comentario
const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Banner}/>
      <Route path="/cursos/:id" component={Course}/>
      <Route path="/cursos" component={CourseGrid}/>
      <Route path="/formulario" component={() => <Form name="Pagina de Contacto"/>}/>
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada</span>
        </div>
      )} />
    </Switch>
  </Router>
)

export default App;
