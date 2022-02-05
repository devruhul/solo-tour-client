import React, { useState, useEffect } from 'react';
import Place from '../Place/Place';
import './Places.css'
import { Spinner } from 'react-bootstrap'

const Places = () => {
    const [places, setPlaces] = useState([])

    // Load all places from the server
    useEffect(() => {
        fetch('https://solo-tour-server-devruhul.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div>
            <h2 className='m-5'>All Places</h2>

            {/* map all places and generate single places */}

            {
                places.length === 0 ? <Spinner animation="border" variant="info" />
                    : <div className='places-container container' >
                        {
                            places.map(place => <Place
                                key={place._id}
                                place={place}
                            ></Place>)
                        }
                    </div>
            }

        </div>

    );
};

export default Places;