import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, Logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">SOLO TOUR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav>
                                <Nav.Link as={Link} to="home">Home</Nav.Link>
                                <Nav.Link as={Link} to="places" >
                                    Places
                                </Nav.Link>
                            </Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                            {user?.email ?
                                <Nav.Link as={Link} to="/" onClick={Logout}>Logout</Nav.Link> :

                                <Nav.Link as={Link} to="login">Login</Nav.Link>
                            }
                            {
                                user?.email ? <NavDropdown title={user.displayName} id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="myorders">My Orders</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="addplace">Add a new Place</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="manageorders">Manage all orders</NavDropdown.Item>
                                </NavDropdown> : null
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;