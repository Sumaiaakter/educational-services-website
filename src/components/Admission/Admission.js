import React from 'react';
import Banner from '../Banner/Banner';


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

        </div>
    );
};

export default Admission;