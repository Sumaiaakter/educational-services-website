import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './University.css';

const University = () => {
    const [universities, setUniversities] = useState([]);
    const [searchText, setSearchText] = useState("");

    //data load
    useEffect(() => {
        fetch(`./education.JSON`)
            .then(res => res.json())
            .then(data => setUniversities(data))
    }, [searchText])
    //search button
    const handleOnChange = (e) => {
        console.log(e);
    }

    // for services
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`./services.JSON`)
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])
    return (
        <div className="university-container">
            <h1 className="uni mb-5">Our University</h1>
            <div className="search-box mb-5">
                <input onChange={handleOnChange} type="text" className="p-2" placeholder="Enter university name" />
                <div className="btn btn-danger">Search</div>
            </div>
            <div className="universities">
                <div className="row">
                    {
                        universities?.map(university =>
                            <div className="col-md-4">
                                <div className="cart">
                                    <div className="image mb-5">
                                        <img className="w-100" src={university.img} alt="" />
                                    </div>
                                    <h2 className="text-primary">{university.name}</h2>
                                    <p>{university.title}</p>
                                    <p>{university.location}</p>
                                    <p>{university.country}</p>
                                    <Link to={`/details/${university.id}`}>
                                        <div className="btn btn-success">Details</div>
                                    </Link>

                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
            <hr />

            {/* for services */}

            <h1 className="uni m-5">Our Services</h1>
            <div className="universities">
                <div className="row">
                    {
                        services?.slice(0, 6).map(service =>
                            <div className="col-md-4">
                                <div className="cart">
                                    <div className="image mb-5">
                                        <img className="w-100" src={service.img} alt="" />
                                    </div>
                                    <h2 className="text-primary">Service: {service.name}</h2>
                                    <p>Facilities: {service.facilities}</p>
                                    <p>Bill: {service.bill}</p>


                                </div>
                            </div>

                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default University;