import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <section className=' container mx-auto px-4'>
            <div className=' grid lg:grid-cols-2 h-full items-center lg:py-[200px] py-10'>
                <div className='col-span-1 flex lg:justify-center justify-start items-center'>
                    <div className=' pb-6'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        {date ? <p>You picked {format(date, 'PP')}.</p> : <p>Please pick a day.</p>}
                    </div>
                </div>
                <div className=' lg:col-span-1'>
                    <img src={chair} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Appointment;