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
            const res = await fetch(`https://y-tau-six.vercel.app/products?email=${user.email}`, {
                headers: { authorization: `bearer ${localStorage.getItem("accessToken")}` }
            })
            const data = res.json();
            return data;
        }
    })
    const handleDeleteProduct = (id) => {
        fetch(`https://y-tau-six.vercel.app/products/${id}`, {
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
                            <th>Price</th>
                            <th>Condition</th>
                            <th>Category</th>
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
                                <td>{product.reSellPrice}</td>
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