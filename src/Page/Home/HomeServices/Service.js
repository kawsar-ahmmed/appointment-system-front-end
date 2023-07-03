import React from 'react';

const Service = ({ service }) => {

    const { title, description, serviceIcon } = service;
    return (
        <div className=' flex items-center flex-col p-12 shadow-md rounded-lg'>
            <div>
                <img src={serviceIcon} alt="" />
            </div>
            <div className=' text-center'>
                <h2 className=' text-accent text-2xl py-5'>{title}</h2>
                <p className=' text-accent'>{description}</p>
            </div>
        </div>
    );
};

export default Service;