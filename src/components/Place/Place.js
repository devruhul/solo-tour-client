import React from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Place = (props) => {
    const { _id, name, description, price, img } = props.place

   
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img className='img-fluid' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>

                        <div className='d-flex justify-content-between'>
                            <div>
                                <Link to={`/places/${_id}`}><Button variant="primary rounded-pill" >Book now</Button></Link>
                            </div>
                            <div>
                                <Card.Text className='text-success'>
                                    ${price}
                                </Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Place;