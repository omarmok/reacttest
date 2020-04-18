import React from 'react';
import { Link } from 'react-router-dom'

import { StyledNavavbar, Navbarbrandimg } from './style.js'




function Navbar() {
    return (

        <StyledNavavbar className="navbar navbar-expand-lg ">

            <div className="navbar-brand">
                <Navbarbrandimg src={"../../images/logo192.png "} />

            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link ">contact</Link>

                    </li>

                </ul>

            </div>
        </StyledNavavbar>

    );
}

export default Navbar;
