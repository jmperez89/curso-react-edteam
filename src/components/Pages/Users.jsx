import React, { Component } from 'react'
import UserCard from '../Molecules/UserCard'
import axios from 'axios'

class Users extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    // Uso de Fetch
    /*componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        users: json
                    })
                })
    }*/
    // Uso de Axios
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
    }


 
    render() {
        const {users} = this.state
        return (
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                    {
                    users.map(u => ( <UserCard 
                        key={u.id} 
                        name={u.name}
                        username={u.username}
                        email={u.email} 
                        />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Users
