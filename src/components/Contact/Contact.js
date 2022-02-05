import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    // POST APi to insert contacts
    const onSubmit = data => {
        fetch('http://localhost:5000/contact', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Succesfully sent message')
                    reset()
                }
            })
    };

    return (
        <Container>
            <Row>
                <Col>
                    <form className='mt-5 w-100 p-5 bg-info vh-75' sm={8} onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName")} className='w-100' placeholder='Type your name' /> <br /> <br />

                        <input {...register("email")} className='w-100' placeholder='Type your email' />
                        <br /> <br />
                        <input {...register("address")} className='w-100' placeholder='Type your address' /> <br /> <br />
                        <input type="number" {...register("phone")} className='w-100' placeholder='Type your phone number' /> <br /> <br />
                        <input className='btn btn-success' type="submit" />
                    </form>
                </Col>
                <Col><img sm={4} src="https://www.copemate.org/wp-content/uploads/2020/09/contact-3.jpg" alt="" /></Col>
            </Row>
        </Container>
    );
};

export default Contact;