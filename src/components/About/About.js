import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <div className="m-5">
                <Container>
                    <Row>
                        <h2 className='text-info fs-1 fw-bold mb-3'>About us</h2>
                        <Col>
                            <h2>We’re Solo Tour Agency</h2>
                            <p>Each tour is handcrafted by our team after months (sometimes years!) of in-country research. We carefully select each activity, transportation, accommodation, and included meal option to ensure a consistent level of quality on each tour</p>
                            <p>Accommodation makes or breaks a trip! You have access to a hotel pool or a beach nearby most days on tour. Most nights, you share a room with just one other group member. The select dorm-style options included are ultra-comfy, extra clean, and uber-unique.</p>
                        </Col>
                        <Col><img  width="400px" src="https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/Rectangle-107.png" alt="" /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;