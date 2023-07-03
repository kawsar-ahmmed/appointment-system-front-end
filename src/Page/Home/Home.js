import React from 'react';
import Banner from './Banner';
import HomeServices from './HomeServices/HomeServices';
import HomeAppointment from './HomeAppointment/HomeAppointment';
import Appointment from '../Appointment/Appointment';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <HomeAppointment></HomeAppointment>
        </>
    );
};

export default Home;