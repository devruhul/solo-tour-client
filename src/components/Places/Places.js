import React, { useState, useEffect } from 'react';
import Place from '../Place/Place';
import './Places.css'

const Places = () => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <div>
            <h2 className='m-5'>All Places</h2>
            <div className='places-container container' >
                {
                    places.map(place => <Place
                        key={place._id}
                        place={place}
                    ></Place>)
                }
            </div>
           
        </div>
    );
};

export default Places;