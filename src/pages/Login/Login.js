import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signInUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");
    const handleLogin = data => {
        setLoginError("")
        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("User login successful.")
            })
            .catch(err => {
                console.log(err)
                setLoginError(err.message)
            })
    }
    return (
        <div className='w-96 mx-auto border p-6 m-6'>
            <h2 className="text-4xl my-3 font-bold text-center">LogIn</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <label className="label"><span className="label-text">Email</span></label>
                <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="email" className="input input-bordered w-full mb-1" />
                {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                <label className="label"><span className="label-text">Password</span></label>
                <input type="password" {...register("password", {
                    required: "Password is required",
                    minLength: { value: 7, message: "Password must be 7 characters or longer." }
                })}
                    placeholder="password" className="input input-bordered w-full mb-3" />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                <button className='btn btn-outline w-full' type="submit">Login</button>
                <p className='text-sm mb-2'>New in Hand-to-Hand <Link className='text-info font-semibold' to='/signup'>Get Register</Link></p>
            </form>
            {loginError && <p className='text-red-500'>{loginError}</p>}
            <div className="divider">OR</div>
            <button className='btn btn-outline btn-warning w-full mb-5'>Continue With Google</button>
        </div>
    );
};

export default Login;