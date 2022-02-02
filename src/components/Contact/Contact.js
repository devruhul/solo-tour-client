import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const Contact = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <Container>
            <Row>
                <Col>
                    <form className='mt-5 w-100 p-5 bg-info vh-75' sm={8} onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName")} className='w-100' placeholder='Type your name' /> <br /> <br />
                        <input {...register("email")} className='w-100' placeholder='type your email' /> <br /> <br />
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