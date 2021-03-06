import React from 'react'
import '../styles/styles.scss'
import Form from './Pages/Form'
import Courses from './Pages/Courses'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Course from './Pages/Course'
import MainMenu from './Organisms/MainMenu'
import Home from './Pages/Home'
import Users from './Pages/Users'
import Bonus from './Pages/Bonus'

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/cursos/:id" component={Course}/>
      <Route path="/cursos" component={Courses}/>
      <Route path="/usuarios" component={Users}/>
      <Route path="/bonus" component={Bonus}/>
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

export default App
