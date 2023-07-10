import React from 'react';
import { format } from 'date-fns';
import './Appointment.css';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


const BookingModal = ({ treatment, date, setTreatment }) => {
    const [user] = useAuthState(auth);

    const { name, slots, _id } = treatment;
    const formattedDate = format(new Date(date), 'PP');

    const handleFrom = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const number = event.target.patientPhone.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            patientName: user.displayName,
            patientEmail: user.email,
            slot,
            patientPhone: number
        }
        console.log(booking)
        const url = 'http://localhost:3001/booking'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Appointment Success ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`You Already Have An Appointment ${formattedDate} at ${slot}`)
                }
                setTreatment(null)
            })

    }

    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <div className='flex items-center justify-between px-4 py-2'>
                        <h2 className=' text-2xl'>{name}</h2>
                        <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost ">x</label>
                    </div>
                    <form onSubmit={handleFrom} className=' flex flex-col w-full p-4 space-y-4'>
                        <input name='date' type="text" value={formattedDate} placeholder="Type here" className="
                        input input-bordered w-full max-w-full disabled:bg-[#E6E6E6] disabled:border-none" disabled />
                        <select name='slot' className="select select-bordered w-full max-w-full">
                            {slots.map(slot => <option>
                                {slot}
                            </option>
                            )}
                        </select>
                        <input name='patientName' type="text" value={user.displayName} placeholder="Type here" className="
                        input input-bordered w-full max-w-full disabled:bg-[#E6E6E6] disabled:border-none" disabled />
                        <input name='patientPhone' type="number" placeholder="Phone Number" className="
                        input input-bordered w-full max-w-full disabled:bg-slate-100" />

                        <input name='patientEmail' type="email" value={user.email} placeholder="Type here" className="
                        input input-bordered w-full max-w-full disabled:bg-[#E6E6E6] disabled:border-none" disabled />
                        <button className='form-button max-w-full btn'>Submit</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default BookingModal;
