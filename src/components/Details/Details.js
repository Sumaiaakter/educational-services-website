import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Menubar from '../Menubar/Menubar';
import './Details.css';

const Details = (props) => {
    const { id } = useParams();
    console.log(id)
    const [details, setDetails] = useState();

    // data load
    useEffect(() => {
        fetch(`./education.JSON`)
            .then(res => res.json())
            .then(data => console.log(data.id))
    }, [])

    return (
        <div className="details bg-green">
            <Menubar></Menubar>
            <div className="row d-flex align-items-center justify-content-center">
                <div>{details?.desc}</div>

            </div>

        </div>
    );
};

export default Details;