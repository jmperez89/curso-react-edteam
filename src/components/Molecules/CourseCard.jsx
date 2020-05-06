import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

const Curso = ({id, title, image, price, profesor}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <Link to={`/cursos/${id}`}>
            <img src= {image ? image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5YznahbCcaCBgKJ4j6nYvPHTYEt5MX9tAaQlrXnMjPNKtQVS6&usqp=CAU"} 
                alt={title ? title : "Not Found"} />
          </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="center">{title}</h3>
          <h2 className="center">{`Prof. ${profesor}`}</h2>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="https://ed.team">{ `$ ${price} USD` } </a>
          </div>
        </div>
      </article>
)

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}

Curso.defaultProps = {
    title: "No se encontró título",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5YznahbCcaCBgKJ4j6nYvPHTYEt5MX9tAaQlrXnMjPNKtQVS6&usqp=CAU",
    price: 20,
    profesor: ""
}

export default Curso
