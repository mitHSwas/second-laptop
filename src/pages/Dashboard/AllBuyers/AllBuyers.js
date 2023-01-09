import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
    const { user } = useContext(AuthContext);
    const url = `https://y-tau-six.vercel.app/allbuyers?email=${user?.email}`;

    const { data: allBuyers = [], isLoading, refetch } = useQuery({
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
    const handleDeleteBuyer = (id) => {
        fetch(`https://y-tau-six.vercel.app/users/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Buyer Deleted Successfully")
                    refetch()
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-4xl text-center text-success my-10 font-bold'>My All Buyers</h3>
            <div className="overflow-x-auto mt-3">
                <table className="table w-full">
                    <thead>
                        <tr className='font-semibold text-warning'>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyers?.map((buyers, i) => <tr key={buyers._id} className="font-semibold">
                                <th>{i + 1}</th>
                                <td>{buyers.name}</td>
                                <td>{buyers.email}</td>
                                <td>{buyers.role}</td>
                                <td><button onClick={() => handleDeleteBuyer(buyers._id)} className='btn btn-sm btn-error text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;