import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/logo.png';

import {
    faCoffee,
    faPhoneVolume,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="left-container text-start">
                            <img src={logo} alt="" />
                            <div className="icons-container d-flex text-center">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </div>
                            </div>
                            <p className="mt-4"><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque accusamus ad recusandae dolore maxime a unde doloremque modi aliquid?</small>
                            </p>

                            <p><small>All rights reserved.</small></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-menu-container">
                            <ul>
                                <li className="footer-menu">Location and Maps</li>
                                <li className="footer-menu">Campus Calender</li>
                                <li className="footer-menu">Help Center</li>
                                <li className="footer-menu">Contact us</li>
                                <li className="footer-menu">About us</li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-5">
                        <div className="right-footer-container">
                            <h3>Sign up for the Admission</h3>
                            <input type="text" className="footer-input"
                                placeholder="Enter Email" />
                            <div className="phone d-flex align-items-center justify-content-center mt-4">
                                <div className="foter-phone-icon">
                                    <FontAwesomeIcon icon={faPhoneVolume} />
                                </div>
                                <div>
                                    <h5>+1 347 224 9813</h5>
                                </div>
                            </div>
                            <div className="map d-flex align-items-center justify-content-center">
                                <div className="foter-phone-icon">
                                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                                </div>
                                <div>
                                    <p>
                                        160 Broadway, Kansas City, MISSOURI-64432,
                                        <br /> East Broadway,Kansas City, MISSOUri-64556
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;