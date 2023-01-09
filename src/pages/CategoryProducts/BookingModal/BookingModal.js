import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const BookingModal = ({ product, setProduct }) => {
    const { user } = useContext(AuthContext);
    const name = user.displayName;
    const email = user.email;
    const { _id, productName, picture, reSellPrice, sellerName } = product;
    const handleBooking = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const location = event.target.location.value;
        const productInfo = {
            name,
            email,
            productName,
            picture,
            sellerName,
            phone,
            location,
            reSellPrice
        }
        fetch('https://y-tau-six.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setProduct(null)
                    toast.success("Booked Confirmed")
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>
                        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                            <div>
                                <label className="label"><span className="label-text">Name</span></label>
                                <input type="text" disabled value={name} className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label"><span className="label-text">Email</span></label>
                                <input type="text" disabled value={email} className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label"><span className="label-text">Product</span></label>
                                <input type="text" disabled value={productName} className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label"><span className="label-text">photoURL</span></label>
                                <input type="text" disabled value={picture} className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label"><span className="label-text">Seller</span></label>
                                <input type="text" disabled value={sellerName} className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label"><span className="label-text">Selling Price($)</span></label>
                                <input type="text" disabled value={reSellPrice} className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label"><span className="label-text">Phone</span></label>
                                <input type="tel" name="phone" placeholder='Your contract number' className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label className="label"><span className="label-text">Location</span></label>
                                <input type="text" name="location" placeholder='Receive location' className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <button className='grid btn btn-primary mx-auto mt-6'>Booking Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;