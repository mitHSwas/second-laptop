import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");
    const handleSignup = data => {
        setSignUpError("")
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        toast.success("User created successfully.")
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err)
                setSignUpError(err.message)
            })
    }
    return (
        <div className='w-96 mx-auto border p-6 m-6'>
            <h2 className="text-4xl my-3 font-bold text-center">SignUp</h2>
            <form onSubmit={handleSubmit(handleSignup)}>
                <label className="label"><span className="label-text">Name</span></label>
                <input type="text" {...register("name", { required: "Name is required" })} placeholder="name" className="input input-bordered w-full my-1" />
                {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                <label className="label"><span className="label-text">Email</span></label>
                <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="email" className="input input-bordered w-full mb-1" />
                {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                <label className="label"><span className="label-text">Password</span></label>
                <input type="password" {...register("password", {
                    required: "Password is required",
                    minLength: { value: 7, message: "Password must be 7 characters or longer." },
                    pattern: {
                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{7}/,
                        message: "Password must have uppercase, lowercase, number and special characters",
                    }
                })}
                    placeholder="password" className="input input-bordered w-full mb-4" />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                <button className='btn btn-outline w-full' type="submit">Signup</button>
                <p className='text-sm mb-2'>Already have an account <Link className='text-info font-semibold' to='/login'>Please login</Link></p>
            </form>
            {signUpError && <p className='text-red-500'>{signUpError}</p>}
            <div className="divider">OR</div>
            <button className='btn btn-outline btn-warning w-full mb-5'>Continue With Google</button>
        </div>
    );
};

export default Signup;