import React, { Component } from 'react'
import UserCard from '../Molecules/UserCard'

class Users extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
                .then(response => console.log(response))
    }

    render() {
        const {users} = this.state
        return (
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div>
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
