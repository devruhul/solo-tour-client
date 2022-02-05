import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { user, handleGoogleSignin } = useFirebase();

    return (
        <div>
            {user?.email ? <h2>Please Logout </h2> : <h2>Please Login</h2>}

            {
                user?.email ? [] : <button onClick={handleGoogleSignin} className='btn btn-dark w-25 text-light mb-5 shadow-lg'>
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