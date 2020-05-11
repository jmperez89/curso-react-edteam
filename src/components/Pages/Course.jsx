import React, {useState} from "react"

const Course = ({ match }) => {

    const [state, setState] = useState({
        id: 1,
        titulo: "React Desde Cero",
        image: "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
        price: 10,
        profesor: "Beto Quiroga 1"
    })

    const changeTitle = (text) => {
        setState({
            ...state,
            titulo: text
        })
    }

    return(
        <div className="ed-grid m-grid-3">
            {
                state ? ( 
                    <>
                        <h1 className="m-cols-3">{ state.titulo }</h1>
                        <img className="m-cols-1" src={state.image} alt={state.titulo} />
                        <p className="m-cols-2">Profesor: {state.profesor}</p>
                        <button onClick={changeTitle.bind(this, "Go desde cero")}>Cambiar Titulo</button>
                    </>
                    ) :
                    <h3>El curso no Existe</h3>
            }
        </div>
    )
}

export default Course