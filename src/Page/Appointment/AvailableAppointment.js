import React from 'react';


const AvailableAppointment = ({ setTreatment, appointment }) => {
    const { name, slots } = appointment;

    return (
        <div className='flex items-center justify-center'>
            <div className=' text-center py-12 shadow-md w-full'>
                <h2 className=' text-2xl text-primary pb-1'>{name}</h2>
                <p>
                    {slots.length > 0 ? slots[0] : 'Not Available'}
                </p>
                <p className={slots.length === 0 ? 'text-red-600' : ' text-accent'}>
                    {slots.length} {slots.length !== 0 ? 'slots' : 'slot'} Available
                </p>
                <label
                    onClick={() => setTreatment(appointment)}
                    className={` border-none btn mt-4 bg-gradient-to-r to-primary from-secondary text-white px-[32px] py-[12px] rounded-md ${slots.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={slots.length === 0}
                    htmlFor="my_modal_6" >Book Appointment</label>

            </div>


        </div>
    );
};

export default AvailableAppointment;