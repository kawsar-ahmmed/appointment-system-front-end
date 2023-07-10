import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <section className='flex h-screen items-center justify-center'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='' >
                    <h2 className='text-accent text-center text-4xl capitalize'>Create an account</h2>
                    <div className=''>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className='border-[#CFCFCF] input w-screen max-w-xs' name='email'
                            {...register("email",
                                { required: "Email Address is required" })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className=''>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' className='border-[#CFCFCF] input w-screen max-w-xs' name='name'
                            {...register("password",
                                { required: "Password is required" })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <div className=''>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='confirmPassword' className='border-[#CFCFCF] input w-screen max-w-xs' name='name'
                            {...register("confirmPassword",
                                { required: "Confirm Password is required" })}
                            aria-invalid={errors.confirmPassword ? "true" : "false"}
                        />
                        {errors.confirmPassword && <p className='text-red-600' role="alert">{errors.confirmPassword?.message}</p>}
                    </div>
                    <input className='w-80 btn mt-8 bg-accent' type="submit" />
                </form>
                <p className='pt-4'>Already Have a account ? <NavLink className=' text-primary hover:text-orange-700' to='/login'>Login</NavLink> </p>
            <SocialLogin></SocialLogin>
            </div>
        </section>
    );
};

export default Register;