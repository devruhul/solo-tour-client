import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'
import { useForm } from "react-hook-form";

const Booking = () => {
    // Get the id from the params
    const { id } = useParams()
    const [place, setPlace] = useState([])

    // Get the place details from the server and use useForm hook
    const { register, handleSubmit, reset } = useForm();
    
    // Order Placed
    const onSubmit = (data, e) => {
        e.preventDefault()
        fetch('https://solo-tour-server-devruhul.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Succesfully placed order')
                    reset()
                }
            })
    };

    // get single place details from the server
    useEffect(() => {
        fetch(`https://solo-tour-server-devruhul.herokuapp.com/places/${id}`)
            .then(res => res.json())
            .then(data => setPlace(data))

    }, [id])

    return (
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <div className=' w-50 m-4'>
                    <h2> Details of {place.name}</h2>
                    <img className='img-fluid rounded' src={place.img} alt="" />
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h2>{place.name}</h2>
                        </div>
                        <div>
                            <p>Per day ${place.price}</p>

                        </div>
                    </div>
                    <p>{place.description}</p>
                </div>
                <div className='w-50 mt-5'>

                    <Row className='mt-5'>
                        <Col>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h2>Please add your details to order</h2>
                                <input {...register("name")} placeholder='Your name' className='w-100' />
                                <br />  <br />
                                <input {...register("email")} placeholder='Your email' className='w-100' />
                                <br />  <br />
                                <input type="number" {...register("days")} placeholder='How many days' className='w-100' />
                                <br />  <br />
                                <input {...register("description")} placeholder='add description' className='w-100' />
                                <br />  <br />
                                <input className='btn btn-success' type="submit" />
                            </form>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Booking;