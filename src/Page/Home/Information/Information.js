import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InformationCard from './InformationCard';

const Information = () => {

    return (
        <section className=' container mx-auto lg:flex justify-around px-4'>
            <InformationCard bgClass="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]" cardTitle="Opening Hours" cardDescription='Lorem Ipsum is simply dummy text of' img={clock} ></InformationCard>
            <InformationCard bgClass="bg-accent text-primary-content" cardTitle="Visit our location" cardDescription='Brooklyn, NY 10036, United States' img={marker} ></InformationCard>
            <InformationCard bgClass="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]" cardTitle="Contact us now" cardDescription='+000 123 456789' img={phone} ></InformationCard>
        </section>
    );
};

export default Information;