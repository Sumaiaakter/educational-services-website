import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Admission.css'


const Admission = () => {
    return (
        <div className="container">
            <Banner></Banner>
            <h2 className="text-primary">Our Services</h2>
            <hr />
            <ul className="service">
                <li>Computer Lab</li>
                <li>Medical Service</li>
                <li>Pathway</li>
                <li>Library</li>
                <li>Canteen</li>
                <li>Dorm</li>
            </ul>
            <Footer />

        </div>
    );
};

export default Admission;