import React, { useEffect, useState } from 'react';
import chair from '../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import AvailableAppointment from './AvailableAppointment';
import BookingModal from './BookingModal';

const Appointment = () => {

    const [date, setDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        const url = 'http://localhost:3001/services';
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [setAppointments])
    let footer = '';
    if (date) {
        footer = <p>{format(date, 'PP')}.</p>;
    }
    else {
        <p>Pick a new date.</p>
    }
    return (
        <section className=' container mx-auto px-4'>
            <div className=' grid lg:grid-cols-2 h-full items-center lg:py-[200px] py-10'>
                <div className='col-span-1 flex lg:justify-center justify-start items-center'>
                    <div className=' pb-6'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            footer={footer}
                        />
                    </div>
                </div>
                <div className=' lg:col-span-1'>
                    <img src={chair} alt="" />
                </div>
            </div>
            <div className=''>
                <h2 className=' lg:text-4xl text-2xl text-primary lg:flex justify-center text-center'>Available slots for Teeth Orthodontics.{footer}</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 items-center gap-10 my-[100px]'>
                {
                    appointments.map(appointment => <AvailableAppointment
                        key={appointment._id}
                        appointment={appointment}
                        date={date}
                        setTreatment={setTreatment}
                    ></AvailableAppointment>)
                }
                {treatment && <BookingModal
                    treatment={treatment}
                    date={date}
                    setTreatment={setTreatment}
                ></BookingModal>}

            </div>
        </section>
    );
};

export default Appointment;