/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";
import SmallLoader from "@/app/components/SmallLoader/SmallLoader";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import {config} from "@/envConfig/envConfig";
import {loginSchema} from "@/schemas";
import {useFormik} from "formik";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {FcGoogle} from "react-icons/fc";
import {useGoogleLogin} from "@react-oauth/google";
import {getTokens} from "@/utils/googleLogin";
import {afterLogin} from "@/utils/afterLogin";

const LoginPage = () => {
    const {token, setToken} = useUserContext();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (token) {
            router.push("/");
        }
    }, [token]);

    const initialLoginValues = {
        email: "",
        password: "",
    };

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
        useFormik({
            initialValues: initialLoginValues,
            validationSchema: loginSchema,
            onSubmit: async (values, action) => {
                setLoading(true);
                const {email, password} = values;
                try {
                    const response = await fetch(
                        `${config.base_url}/api/token`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                username: email,
                                password,
                                grant_type: "password",
                                client_id: config.auth_client_id,
                                client_secret: config.auth_client_secret,
                            }),
                        }
                    );
                    const data = await response.json();
                    if (data.access_token) {
                        afterLogin(setToken, data, router, toast);
                        action.resetForm();
                        setLoading(false);
                    } else {
                        toast.error(data.error_description);
                        setLoading(false);
                    }
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                    toast.error("Something went wrong");
                }
            },
        });

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: (res) => {
            getTokens(res.code)
                .then((data) => {
                    if (data.access_token)
                        afterLogin(setToken, data, router, toast);
                })
                .catch((error) => {
                    console.error("Something went wrong.", error);
                });
        },
        flow: "auth-code",
    });

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
                    <form onSubmit={handleSubmit}>
                        <div className="mt-3">
                            <label className="block text-base mb-1">
                                Email Address
                            </label>
                            <input
                                className="input-feild"
                                id="email"
                                type="email"
                                placeholder="Enter email..."
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email && (
                                <p className="text-red-500"> {errors.email}</p>
                            )}
                        </div>
                        <div className="mt-3">
                            <label className="block text-base mb-1">
                                Password
                            </label>
                            <input
                                className="input-feild"
                                id="password"
                                type="password"
                                placeholder="Enter password..."
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password && (
                                <p className="text-red-500">
                                    {errors.password}
                                </p>
                            )}
                            <div className="mt-3">
                                <button
                                    disabled={loading}
                                    className="btn-primary py-3 font-semibold  w-full">
                                    {loading ? <SmallLoader /> : "Sign In"}
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
                        </div>
                    </form>
                    <div>
                        <div className="mt-2">
                            <button
                                onClick={() => handleGoogleLogin()}
                                className="btn-secondary inline-flex justify-center items-center py-3 font-semibold  w-full">
                                <FcGoogle className="mr-2" size={22} /> Continue
                                with google
                            </button>
                        </div>
                        <div className="mt-2">
                            <div className="desc">
                                Don't have an account?{" "}
                                <Link
                                    href={"/auth/register"}
                                    className="hover:underline">
                                    {" "}
                                    <span> Sign up for free</span>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className=" mt-2 flex justify-center">
                                <div className=" border-gray-700">
                                    -----------------
                                </div>
                                <h2 className="text-lg -mt-1"> or </h2>
                                <div className=" border-gray-700">
                                    -----------------
                                </div>
                            </div>
                            <Link
                                href={"/auth/become-a-host"}
                                className="btn-primary py-3 font-semibold  w-full mt-2">
                                Become a host
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
