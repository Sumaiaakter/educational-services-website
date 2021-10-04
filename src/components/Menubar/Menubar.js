import React from 'react';
import './Menubar.css'
import logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Menubar = () => {
    return (
        <div className="menubar-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo-img">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container">
                            <div className="d-flex align-items-end text-white justify-content-end">

                                <nav className="nav d-flex text-white align-items-end justify-content-end">
                                    <Link className="text-white mx-2" to="/home">Home</Link>
                                    <Link className="text-white mx-2" to="/academics">Academics</Link>

                                    <Link className="text-white mx-2" to="/services">Services</Link>
                                    <Link className="text-white mx-2" to="/about">About</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Menubar;