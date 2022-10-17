import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/react.png';

//class -> className
export default function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" >
            <ul className="navbar-nav">
                <span className="nav-item">
                    <img src={logo} style={{ height: 50, width: 50, padding: 10 }}></img>
                </span>
                <span className="nav-item">
                    <Link className="nav-link" to="funcom"> Functional Component </Link>
                </span>
                <span className="nav-item">
                    <Link className="nav-link" to="classcom"> Class Component </Link>
                </span>
                <span className="nav-item">
                    <Link className="nav-link" to="props"> Props </Link>
                </span>
                <span className="nav-item">
                    <Link className="nav-link" to="map"> Map elements from array </Link>
                </span>
            </ul>
        </nav>
        </>
    )
}