import React from 'react';
import Menubar from '../Menubar/Menubar';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <Menubar />
                    <div className="col-md-6">
                        <h1 className="title">
                            AN INVESTMENT IN KNOWLEDGE <br />PAYS THE BEST INTEREST
                        </h1>
                        <p className="para text-center mt-3">
                            Education is the passport to the future, for tomorrow belongs to those who prepare for it today
                        </p>
                        <button className="mt-3 about-btn">About Us</button>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;