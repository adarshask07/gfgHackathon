import React from 'react';
import { useForm } from 'react-hook-form';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { LockClosedIcon, UserCircleIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] =useState(false);
    const [loggedIn, setLoggedIn] = useState(false) ; 

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="max-w-md w-full px-6 py-8 bg-gray-800 shadow-lg rounded-lg">
                <div className="flex justify-center items-center">
                    <span className="text-2xl font-medium text-white">Login</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <div className="relative">
                        <div className="inline-flex items-center justify-center absolute top-0 left-0 h-full w-10 text-gray-400">
                            <UserCircleIcon className="h-6 w-6" />
                        </div>
                        <input
                            type="text"
                            {...register("username", { required: true })}
                            className="text-gray-200 w-full pl-12 pr-3 py-2 rounded-lg bg-gray-700 focus:outline-none focus:shadow-outline focus:border-indigo-500"
                            placeholder="Username"
                        />
                    </div>
                    {errors.username && <span className="text-red-500">This field is required</span>}
                    <div className="relative">
                        <div className="inline-flex items-center justify-center absolute top-0 left-0 h-full w-10 text-gray-400">
                            <LockClosedIcon className="h-6 w-6" />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password", { required: true })}
                            className="text-gray-200 w-full pl-12 pr-3 py-2 rounded-lg bg-gray-700 focus:outline-none focus:shadow-outline focus:border-indigo-500"
                            placeholder="Password"
                        />
                        <div className="inline-flex items-center justify-center absolute top-0 right-0 h-full w-10">
                            {showPassword ? (
                                <EyeOffIcon
                                    className="h-6 w-6 text-gray-400 cursor-pointer"
                                    onClick={() => setShowPassword(false)}
                                />
                            ) : (
                                <EyeIcon
                                    className="h-6 w-6 text-gray-400 cursor-pointer"
                                    onClick={() => setShowPassword(true)}
                                />
                            )}
                        </div>
                    </div>
                    {errors.password && <span className="text-red-500">This field is required</span>}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="flex justify-between items-center mt-4">
                    <span>    </span>
                    <Link
                        to="/forgot-password"
                        className="text-sm font-medium text-indigo-500 hover:text-indigo-400"
                    >
                        Forgot Password?
                    </Link>
                </div>
                <div className="flex justify-center items-center mt-4">
                    <span className="text-gray-400 mr-2">Don't have an account?</span>
                    <Link
                        to="/"
                        className="text-sm font-medium text-indigo-500 hover:text-indigo-400"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Login;

