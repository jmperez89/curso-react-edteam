import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

const root = document.getElementById("root");
//const elemento = React.createElement(componente, propiedades, hijos);
//const elemento = React.createElement("h1", {className: "saludo"}, "Hola Mundo");
const msj = document.getElementById("msj");


const elemento = <h1 className="Saludos">Hola Mundo con JSX</h1>

const mensaje = <p className="message">Soy un parrafo, creado con JSX</p>

ReactDOM.render(elemento, root);

ReactDOM.render(mensaje, msj)