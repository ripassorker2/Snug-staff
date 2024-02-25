/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import {FcGoogle} from "react-icons/fc";

const LoginPage = () => {
    return (
        <div className="container">
            <div className="flex justify-center items-center md:mt-16 mt-8">
                <div className="shadow bg-blue-gray-50 md:w-[500px] md:p-8 p-4 rounded-md">
                    <div>
                        <h2 className="text-3xl font-semibold">
                            <span>Sign In</span>
                        </h2>
                        <p className="desc mt-2">
                            Welcome back! Please enter your details.
                        </p>
                    </div>
                    <form action="">
                        <div className="mt-3">
                            <label className="block text-base mb-1">
                                Email Address
                            </label>
                            <input
                                className=" border border-gray-500 rounded w-full py-3 px-3  focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                id="email"
                                type="email"
                                placeholder="Enter email..."
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-base mb-1">
                                Password
                            </label>
                            <input
                                className=" border border-gray-500 rounded w-full py-3 px-3  focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                id="password"
                                type="password"
                                placeholder="Enter password..."
                            />
                            <div className="mt-4">
                                <button className="btn-primary py-3 font-semibold  w-full">
                                    Sign In
                                </button>
                            </div>
                            <div className=" mt-2 flex justify-center">
                                <div className=" border-gray-700">
                                    -----------------
                                </div>
                                <h2 className="text-lg -mt-1"> or </h2>
                                <div className=" border-gray-700">
                                    -----------------
                                </div>
                            </div>
                            <div className="mt-2">
                                <button className="btn-secondary inline-flex justify-center items-center py-3 font-semibold  w-full">
                                    <FcGoogle className="mr-2" size={22} />{" "}
                                    Continue with google
                                </button>
                            </div>
                            <div className="mt-2">
                                <div className="desc">
                                    Don't have an account?{" "}
                                    <Link
                                        href={"/register"}
                                        className="hover:underline">
                                        {" "}
                                        <span> Sign up for free</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
