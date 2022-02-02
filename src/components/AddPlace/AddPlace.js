import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddPlace = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <Container>
                <Row className='mb-5'>
                    <Col>
                        <form className='mt-5 w-100 p-5 bg-info vh-50' onSubmit={handleSubmit(onSubmit)}>
                            <h2>Add a new place</h2>
                            <input {...register("name")} className='w-50' placeholder='Type new place name' /> <br /> <br />
                            <input {...register("description")} className='w-50' placeholder='Type place description' /> <br /> <br />
                            <input type="number" {...register("price")} className='w-50' placeholder='Place cost' /> <br /> <br />
                            <input {...register("img")} className='w-50' placeholder='Type or paste img url' /> <br /> <br />
                            <input className='btn btn-success' type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AddPlace;