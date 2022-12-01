import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/allbuyers?email=${user?.email}`;

    const { data: allbuyers = [], isLoading } = useQuery({
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
            <h3 className='text-3xl text-center mt-3 font-semibold'>My all buyers</h3>
            <div className="overflow-x-auto mt-3">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allbuyers?.map((buyers, i) => <tr key={buyers._id}>
                                <th>{i + 1}</th>
                                <td>{buyers.name}</td>
                                <td>{buyers.email}</td>
                                <td>{buyers.role}</td>
                                <td><button className='btn btn-sm btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;