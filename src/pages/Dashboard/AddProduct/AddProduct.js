import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image)
        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(formData => {
                if (formData.success) {
                    const product = {
                        productName: data.product,
                        reSellPrice: data.price,
                        location: data.location,
                        condition: data.condition,
                        picture: formData.data.url,
                        phone: data.phoneNumber,
                        categoryName: data.category,
                        email: user.email,
                    }
                    // save product to the database
                    fetch("http://localhost:5000/products", {
                        method: "POST",
                        headers: {
                            "content-type": "Application/json",
                            authorization: `bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            if (result.acknowledged) {
                                console.log(result)
                                toast.success(`${data.product} added successfully`);
                                navigate("/dashboard/myproducts");
                            }
                        })
                }
            })
    }
    return (
        <div className='w-4/5 p-7'>
            <h3 className='text-4xl text-center font-semibold my-8'>Add A Product</h3>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='grid gap-4 md:grid-cols-1 lg:grid-cols-2'>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Product name</span></label>
                        <input type="text" {...register("product", {
                            required: "Product name is required",
                        })} className="input input-bordered w-full" />
                        {errors.product && <p className='text-red-500'>{errors.product?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Price</span></label>
                        <input type="text" defaultValue="$" {...register("price", {
                            required: "price is required"
                        })} className="input input-bordered w-full" />
                        {errors.price && <p className='text-red-500'>{errors.price?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Phone Number</span></label>
                        <input type="text" {...register("phoneNumber", {
                            required: "Phone Number is required",
                        })} className="input input-bordered w-full" />
                        {errors.phoneNumber && <p className='text-red-500'>{errors.phoneNumber?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input defaultValue={user.email} disabled type="email" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "Image is required",
                        })} className="input input-bordered w-full" />
                        {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "location is required"
                        })} className="input input-bordered w-full" />
                        {errors.location && <p className='text-red-500'>{errors.location?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Product Category</span></label>
                        <select {...register("category", { required: "category is required" })} className="select select-bordered w-full max-w-xs mb-6">
                            <option value='Display-Screen'>Display Screen</option>
                            <option value='Laptop-RAM'>Laptop RAM</option>
                            <option value='Keyboard'>Keyboard</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Product Condition</span></label>
                        <select {...register("condition", { required: "condition is required" })} className="select select-bordered w-full max-w-xs">
                            <option value='excellent'>Excellent</option>
                            <option value="good">Good</option>
                            <option value='fair'>Fair</option>
                        </select>
                    </div>
                </div>
                <input className='btn btn-accent w-1/2 grid mx-auto text-white' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;