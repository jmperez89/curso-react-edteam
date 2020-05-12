import {useState, useEffect} from 'react'
import Axios from 'axios'

const useCourse = id => {

    const [state, setState] = useState({})

    useEffect(() => {
        Axios.get(`https://my-json-server.typicode.com/jmperez89/json-db/courses/${id}`)
            .then(response => setState(response.data))
    }, [])

    return state

}

export default useCourse
