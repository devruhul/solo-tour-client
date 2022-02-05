import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from '../../hooks/useAuth';


const PrivateOutlet = () => {
    const { user, isLoading } = useAuth()
    const location = useLocation()
    
    // if user is not loaded yet, show loading message          
    if (isLoading) {
        return <Spinner animation="border" variant="info" />

    }

    return user.email ? <Outlet /> :
        <Navigate
            to="/login"
            state={{ from: location }}
        />;
};

export default PrivateOutlet;