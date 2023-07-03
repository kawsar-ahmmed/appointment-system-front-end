import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const ServiceInfo = () => {
    return (
        <section className=' m-auto'>
            <div className=' lg:grid lg:grid-cols-7 gap-14 items-center mt-[120px]'>
                <div className=' col-start-2 col-end-4 mb-6'>
                    <img className=' ' src={treatment} alt="" />
                </div>
                <div className='col-start-4 col-end-7'>
                    <h2 className=' text-4xl text-accent leading-tight pb-6'>Exceptional Dental Care, on Your Terms</h2>
                    <p className=' text-accent mb-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className=' bg-gradient-to-r to-primary from-secondary text-white px-[32px] py-[12px] rounded-md'>GET STARTED</button>
                </div>
            </div>
        </section>
    );
};

export default ServiceInfo;