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
                        sellerName: data.sellerName,
                        email: user.email,
                        picture: formData.data.url,
                        originalPrice: data.originalPrice,
                        reSellPrice: data.resellPrice,
                        yearOfUse: data.productAge,
                        postedTime: new Date().toJSON().slice(0, 10).split('-').reverse().join('/'),
                        categoryName: data.category,
                    }
                    // save product to the database
                    fetch("https://y-tau-six.vercel.app/products", {
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
        <div className='container mx-auto w-4/5 p-7'>
            <h3 className='text-3xl md:text-3xl lg:text-4xl text-center font-bold text-success my-5 md:my-8 lg:my-10'>Add A Product</h3>
            <form onSubmit={handleSubmit(handleAddProduct)} className="font-semibold">
                <div className='grid gap-4 md:grid-cols-1 lg:grid-cols-2'>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Product name</span></label>
                        <input type="text" {...register("product", {
                            required: "Product name is required",
                        })} className="input input-bordered w-full" />
                        {errors.product && <p className='text-red-500'>{errors.product?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Seller Name</span></label>
                        <input type="text" value={user?.displayName} {...register("sellerName", {
                            required: "Seller name is required",
                        })} className="input input-bordered w-full" />
                        {errors.sellerName && <p className='text-red-500'>{errors.sellerName?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Original Price($)</span></label>
                        <input type="text" {...register("originalPrice", {
                            required: "Original price is required"
                        })} className="input input-bordered w-full" />
                        {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input value={user?.email} disabled type="email" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Resell Price($)</span></label>
                        <input type="text" {...register("resellPrice", {
                            required: "Resell price is required"
                        })} className="input input-bordered w-full" />
                        {errors.resellPrice && <p className='text-red-500'>{errors.resellPrice?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "Image is required",
                        })} className="input input-bordered w-full" />
                        {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Product Age(Year)</span></label>
                        <input type="number" {...register("productAge", {
                            required: "Product age required"
                        })} className="input input-bordered w-full" />
                        {errors.productAge && <p className='text-red-500'>{errors.productAge?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Product Category</span></label>
                        <select {...register("category", { required: "category is required" })} className="select select-bordered w-full max-w-xs mb-6">
                            <option value='Display-Screen'>Display Screen</option>
                            <option value='Laptop-RAM'>Laptop RAM</option>
                            <option value='Keyboard'>Keyboard</option>
                            <option value='Laptop-stand'>Laptop stand</option>
                            <option value='Mouse'>Mouse</option>
                        </select>
                    </div>
                </div>
                <input className='btn btn-warning w-1/2 grid mx-auto text-white' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;