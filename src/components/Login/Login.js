import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, handleGoogleSignin } = useAuth();
    const location = useLocation()
    const navigate = useNavigate()
    const redirect_uri = location.state?.from || "/home"


    const handleGoogleLogin = () => {
        handleGoogleSignin()
            .then(result => {
                navigate(redirect_uri)
            })
    }
    return (
        <div className='m-5'>
            {user?.email ? <h2>Please Logout </h2> : <h2>Please Login</h2>}


            {
                user?.email ? []
                    : <button onClick={handleGoogleLogin} className='btn btn-dark w-25 text-light mb-5 shadow-lg'>
                        <span className='mx-3'>
                            <i className="fab fa-google"></i>
                        </span>
                        Google Sign in
                    </button>

            }



        </div>
    );
};

export default Login;