import React from 'react';
import toast from 'react-hot-toast';

const BookingModal = ({ product, setProduct }) => {
    const { _id, productName, picture, reSellPrice, sellerName } = product;
    const handleBooking = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const location = event.target.location.value;
        const productInfo = {
            productName,
            picture,
            sellerName,
            phone,
            location,
            reSellPrice
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
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
                                <input type="text" disabled defaultValue={"Name"} className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label"><span className="label-text">Email</span></label>
                                <input type="text" disabled defaultValue={"email"} className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label"><span className="label-text">Product</span></label>
                                <input type="text" disabled defaultValue={productName} className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label"><span className="label-text">photoURL</span></label>
                                <input type="text" disabled defaultValue={picture} className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label"><span className="label-text">Seller</span></label>
                                <input type="text" disabled defaultValue={sellerName} className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label"><span className="label-text">Selling Price($)</span></label>
                                <input type="text" disabled defaultValue={reSellPrice} className="input input-bordered w-full" />
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