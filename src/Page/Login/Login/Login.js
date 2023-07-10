import React from 'react';
import SignIn from './SignIn';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    return (
        <section className=' flex h-screen items-center justify-center'>
            <div>
                <SignIn></SignIn>
            </div>
        </section>
    );
};

export default Login;