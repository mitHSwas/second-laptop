import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `https://y-tau-six.vercel.app/booking?email=${user?.email}`;

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                }
            });
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-3xl md:text-3xl lg:text-4xl text-center text-success mt-6 font-bold'>My Order/Orders</h3>
            <div className="overflow-x-auto mt-8">
                <table className="table w-full">
                    <thead>
                        <tr className='text-warning font-bold text-xl'>
                            <th>Index</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <tr key={booking._id} className="font-semibold">
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={booking.picture} alt="" />
                                    </div>
                                </div></td>
                                <td>{booking.productName}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.location}</td>
                                <td>${booking.reSellPrice}</td>
                                <td><button className='btn btn-sm text-white btn-warning'>Pay Now</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;