import React from 'react';


const InformationCard = ({cardTitle, cardDescription, img, bgClass}) => {

    return (
        <div className={`rounded-md ${bgClass} lg:w-[450px] w-full py-[52px] flex items-center justify-start lg:mb-16 mb-6  px-6`}>
            <div className=' mr-5'>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className=' text-white'>{cardTitle}</h2>
                <p className=' text-white'>{cardDescription}</p>
            </div>
        </div>
    );
};

export default InformationCard;