import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import Menubar from '../Menubar/Menubar';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    // console.log(id)
    const [details, setDetails] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});
    console.log(details)
    console.log(singleDetails)

    // data load
    useEffect(() => {
        fetch(`/services.JSON`)
            .then(res => res.json())
            .then(data => setSingleDetails(data.services))
    }, []);

    useEffect(() => {
        const foundService = details.find(services => services.id === id);
        setSingleDetails(foundService);
    }, [details])

    return (
        <div className="details">
            <Menubar />

            <div className="mt-5 bg-primary">
                <h1>{id}</h1>
                <h2>This is single detail: {setSingleDetails.facilities}</h2>
                <h2>This is single detail: {setDetails.name}</h2>
            </div>



        </div>
    );
};

export default Details;