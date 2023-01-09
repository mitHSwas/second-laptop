import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
    const { user } = useContext(AuthContext);
    const url = `https://y-tau-six.vercel.app/allsellers?email=${user?.email}`;

    const { data: allSellers = [], isLoading, refetch } = useQuery({
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
    const handleDeleteSeller = (id) => {
        fetch(`https://y-tau-six.vercel.app/users/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Seller Deleted Successfully")
                    refetch()
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-4xl text-center my-10 font-bold text-success'>My All Sellers</h3>
            <div className="overflow-x-auto mt-3">
                <table className="table w-full font-semibold">
                    <thead>
                        <tr className='text-warning'>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers?.map((sellers, i) => <tr key={sellers._id}>
                                <th>{i + 1}</th>
                                <td>{sellers.name}</td>
                                <td>{sellers.email}</td>
                                <td>{sellers.role}</td>
                                <td><button onClick={() => handleDeleteSeller(sellers._id)} className='btn btn-sm btn-error text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;