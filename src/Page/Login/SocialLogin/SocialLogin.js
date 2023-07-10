import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            console.log(user);
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);

    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className='w-full bg-transparent text-accent btn'
            >
                CONTINUE WITH GOOGLE
            </button>
        </div>
    );
};

export default SocialLogin;
