import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
    faEnvelope,
    faMapMarkerAlt,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerLogo from "../../../images/logo.png"
import FooterImg from "../../../images/footerbg.jpg"
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="text-white">
                <div className="py-4 gradient">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="text-center my-2">
                                    <img width="120px" src={footerLogo} alt="" />
                                </div>

                                <ul className="list-unstyled">
                                    <li>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <span className="ms-1 fs-5"> Sunamganj,Bangladesh</span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faEnvelope} />

                                        <a className='text-white text-decoration-none' href="mailto:ruhulamin262001@gmail.com">
                                            <span className="ms-1 fs-5">  ruhulamin262001@gmail.com
                                            </span>
                                        </a>

                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <span className="ms-1 fs-5">
                                            Helpline: 01770991502 (Available:10:00AM to 10.00PM)
                                        </span>
                                    </li>
                                </ul>
                            </Col>
                            <Col md={2}>
                                <ul className="list-unstyled footer-link">
                                    <li>
                                        <NavLink to="home">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="about">About us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="contact">Contact us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="places">Places</NavLink>
                                    </li>
                                </ul>
                            </Col>
                            <Col md={4}>
                                <div className="">
                                    <img className="img-fluid" src={FooterImg} alt="Footer Img" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <hr className="m-0 p-0" />
                <p className="text-center m-0 py-3 copyright">
                    Copyright © All Reserved by Ruhul Amin 2021
                </p>
            </div>
        </div>
    );
};

export default Footer;