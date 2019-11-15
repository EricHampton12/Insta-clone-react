import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="myContainer mt-5 mb-3">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <form>
                                <div className="form-group text-white">
                                    <label for="exampleInputEmail1 text">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    
                                </div>
                                <div className="form-group text-white">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control text-dark" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
