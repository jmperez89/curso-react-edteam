import React, {useState, useEffect} from "react"
import Axios from 'axios'
const Course = ({ match }) => {

    const [state, setState] = useState({

    })

    useEffect(() => {
        console.log("hola")
        Axios.get('https://my-json-server.typicode.com/jmperez89/json-db/courses/6')
            .then(response => setState(response.data))
    }, [])

    return(
        <div className="ed-grid m-grid-3">
            {
                state ? ( 
                    <>
                        <h1 className="m-cols-3">{ state.titulo }</h1>
                        <img className="m-cols-1" src={state.image} alt={state.titulo} />
                        <p className="m-cols-2">Profesor: {state.profesor}</p>
                    </>
                    ) :
                    <h3>El curso no Existe</h3>
            }
        </div>
    )
}

export default Course