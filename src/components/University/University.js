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
    return (
        <div className="university-container">
            <h1 className="uni mb-5">Our University</h1>
            <div className="search-box">
                <input onChange={handleOnChange} type="text" className="p-2" placeholder="Enter university name" />
                <div className="btn btn-danger">Search</div>
            </div>
            <div className="universities">
                <div className="row">
                    {
                        universities?.map(university =>
                            <div className="col-md-4">
                                <div className="cart">
                                    <div className="image">
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

        </div>
    );
};

export default University;