import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="container mt-2">
                    <div className="row">
                        <div className="col">
                            <nav className="navbar navbar-light bg-light">
                                <a className="navbar-brand" href="#" >
                                    <img src="/instalogo.png" width="30" height="30" alt="" />
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
