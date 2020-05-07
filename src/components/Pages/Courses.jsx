import React, { Component } from "react"
import Axios from "axios"
import CourseGrid from "../Organisms/CourseGrid"

class Courses extends Component {

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
        return <CourseGrid courses={courses} />
    }
}

export default Courses