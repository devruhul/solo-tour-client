import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-body bg-success">
                        <h3>Great Trip for Solo Travellers</h3>
                        <p>Hundreds of years in the future, the last surviving humans discover a way of sending consciousness back through time, directly into people in the 21st century -- "travelers," who assume the lives of seemingly random people.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-body bg-success">
                        <h3>Mountain Traveler </h3>
                        <p>The Mountain Traveler - Fall 2021. The Mountain Traveler. 2021 Fall Sports Preview. 2021 Fall Sports Preview. 2021-2022 Medical Health Service Directory.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-body bg-success">
                        <h3>Sundarban Travel and Tour</h3>
                        <p>Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh's division of Khulna.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;