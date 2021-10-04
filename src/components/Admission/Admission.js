import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';


const Admission = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-primary">Our Services</h2>
            <hr />
            <ul>
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