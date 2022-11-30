import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products', 'email'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user.email}`, {
                headers: { authorization: `bearer ${localStorage.getItem("accessToken")}` }
            })
            const data = res.json();
            return data;
        }
    })
    const handleDeleteProduct = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success("Product deleted")
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-4xl font-semibold my-8 text-center">My Added Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Condition</th>
                            <th>Status</th>
                            <th>Click For</th>
                            <th>Click For</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-14 rounded-full">
                                        <img src={product.picture} alt="" />
                                    </div>
                                </div></td>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>{product.condition}</td>
                                <td>{product.categoryName}</td>
                                <td>
                                    <label onClick={() => handleDeleteProduct(product._id)} className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;