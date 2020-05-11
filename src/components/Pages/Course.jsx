import React, { useState, useEffect } from "react"
import Axios from 'axios'
const Course = ({ match }) => {

    const [state, setState] = useState({})
    const [comment, setComment] = useState("Sin comentarios")

    useEffect(() => {
        Axios.get(`https://my-json-server.typicode.com/jmperez89/json-db/courses/${match.params.id}`)
            .then(response => setState(response.data))
    }, [])

    const myComment = e => {
        setComment(e.target.value)
    }

    return (
        <div className="ed-grid m-grid-3">
            {
                state ? (
                    <div className="ed-grid">
                        <div className="l-block">
                            <h1 className="m-cols-3">{state.titulo}</h1>
                            <img className="m-cols-1" src={state.image} alt={state.titulo} />
                            <p className="m-cols-2">Profesor: {state.profesor}</p>
                        </div>
                        <div className="">
                            <h2>Escribe tu comentario</h2>
                            <input type="text" placeholder="Escribe..." onChange={myComment.bind(this)}></input>
                            <p>{comment}</p>
                        </div>
                    </div>
                ) :
                    <h3>El curso no Existe</h3>
            }
        </div>
    )
}

export default Course
