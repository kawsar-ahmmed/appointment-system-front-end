import React from 'react';
import chair from '../../assets/images/chair.png';
import '../Home/Home.css';
import Information from './Information/Information';

const Banner = () => {
    return (
        <section className='banner-background py-10'>
            <div className=' container mx-auto flex lg:flex-row-reverse flex-col h-full items-center lg:py-[220px] py-[20px] px-4 gap-10'>
                <div className="banner-img">
                    <figure><img src={chair} alt="" /></figure>
                </div>
                <div className="banner-content mb-9">
                    <h1 className=' lg:text-5xl text-4xl font-bold text-accent pb-4'>Your New Smile Starts Here</h1>
                    <p className=' text-accent mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className=' bg-gradient-to-r to-primary from-secondary text-white px-[32px] py-[12px] rounded-md'>GET STARTED</button>
                </div>
            </div>
            <Information></Information>
        </section>
    );
};

export default Banner;