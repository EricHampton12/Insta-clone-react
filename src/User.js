import React, { Component } from 'react'
import Axios from 'axios';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:''
        };
        
    }

    componentDidMount() {
        Axios.get('http://127.0.0.1:8000/api/users',{email:'hudson.jerald@example.com', password:'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'}).then(res=> {
            console.log(res);
        })
    }

    render() {
        return <div>{this.state.name}</div>;
    }
}


