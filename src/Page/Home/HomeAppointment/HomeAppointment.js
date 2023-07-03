import React from 'react';
import '../Home.css';
import doctor from '../../../assets/images/doctor.png'

const HomeAppointment = () => {
    return (
        <section className='appointment-background lg:py-0 px-4 py-10'>
            <div className='container mx-auto grid grid-cols-2 items-center'>
                <div className='col-span-1 lg:mt-[-250px] hidden lg:block'>
                    <img src={doctor} alt="" />
                </div>
                <div className='lg:col-span-1 col-start-1 col-end-3 text-center lg:text-start'>
                    <h2 className=' text-lg text-secondary pb-4'>Appointment</h2>
                    <h1 className=' text-4xl text-white pb-2'>Make an appointment Today</h1>
                    <p className=' text-white pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className='bg-gradient-to-r to-primary from-secondary text-white px-[32px] py-[12px] rounded-md'>GET STARTED</button>
                </div>
            </div>

        </section>
    );
};

export default HomeAppointment;