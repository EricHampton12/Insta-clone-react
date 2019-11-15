import React, { Component } from 'react'
import Login from './Login';
import User from './User';

export default class Splash extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron bg-dark">
                            <h3 className="display-4 text-white text-center">Welcome to Instagram-ish!</h3>
                            <Login />
                            <User />
                            
                                <a className="btn btn-light btn-sm mt-3 ml-5" id="jumboButton" href="#" role="button">Create Account</a>
                                <img className="ml-5 mt-2" src="/instalogo.png" width="60" height="60" alt="" /> 

                            </div>
                        </div>
                    </div>
                </div>
        )   
    }
}
