import React, { Component } from "react"
import CourseCard from "../Molecules/CourseCard"
import Axios from "axios"

class CourseGrid extends Component {

    constructor(props) {
        super(props)

        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        Axios.get('https://my-json-server.typicode.com/jmperez89/json-db/courses')
            .then(response => this.setState({
                courses: response.data
            }))
    }

    render() {
        const { courses } = this.state
        return (
            <div className="ed-grid m-grid-3">
                { courses.length === 0 
                ? <h1 className="t3">Cargando...</h1>
                : courses.map(c => (
                    <CourseCard
                        key={c.id}
                        id={c.id}
                        title={c.titulo}
                        image={c.image}
                        price={c.price}
                        profesor={c.profesor}
            
                    />
                    )) 
                }
            </div>
        )
    }
}

export default CourseGrid