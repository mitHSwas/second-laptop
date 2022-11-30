import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");
    const [signupUserEmail, setSignupUserEmail] = useState("");
    const [token] = useToken(signupUserEmail)
    const navigate = useNavigate()

    if (token) {
        navigate('/')
    }

    const handleSignup = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const role = data.role;
        console.log(name, email, password, role);
        setSignUpError("")
        createUser(email, password)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(name, email, role);
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err)
                setSignUpError(err.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                const role = "buyer";
                saveUser(user.displayName, user.email, role)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const saveUser = (name, email, role) => {
        const user = { name, email, role }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("User created successfully.")
                    setSignupUserEmail(email)
                }
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
                    placeholder="password" className="input input-bordered w-full mb-2" />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                <label className="label"><span className="label-text">Account as</span></label>
                <select {...register("role", { required: true })} className="select select-bordered w-full mb-4">
                    <option selected value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                </select>
                <button className='btn btn-outline w-full' type="submit">Signup</button>
                <p className='text-sm mb-2'>Already have an account <Link className='text-info font-semibold' to='/login'>Please login</Link></p>
            </form>
            {signUpError && <p className='text-red-500'>{signUpError}</p>}
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn btn-outline btn-warning w-full mb-5'>Google SignIn As Buyer</button>
        </div>
    );
};

export default Signup;