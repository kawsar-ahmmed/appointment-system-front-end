import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
import ServiceInfo from './ServiceInfo';


const HomeServices = () => {
    const services = [
        {
            _id: '1',
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            serviceIcon: cavity

        },
        {
            _id: '2',
            title: 'Cavity FillingCavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            serviceIcon: fluoride

        },
        {
            _id: '3',
            title: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            serviceIcon: whitening

        },
    ]
    return (
        <section className=' container mx-auto px-4 lg:pb-[250px] pb-[60px]'>
            <div className='text-center py-12 my-12'>
                <h1 className=' text-lg mb-1 text-primary'>OUR SERVICES</h1>
                <h2 className=' text-4xl text-accent'>Services We Provide</h2>
            </div>
            <div className='lg:flex gap-8 sm:flex md:flex'>
                {
                    services.map(service =>
                        <Service
                        key={service._id}
                        service={service}
                        ></Service>
                    )
                }
            </div>
            <ServiceInfo></ServiceInfo>
        </section>
    );
};

export default HomeServices;