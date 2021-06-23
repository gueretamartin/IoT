import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                           <Link className="nav-link" to={{ pathname: "/section" }}>Sensor</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={{ pathname: "/about" }}>About Us</Link>
                        </li>
                    </ul>
                    <Link className="nav-link" to={{ pathname: "/" }}>Home</Link> 
                </div>
            </div>
        </nav>
    );
}

export default Navbar;