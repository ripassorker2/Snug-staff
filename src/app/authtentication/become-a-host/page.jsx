/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, {useEffect, useState} from "react";
import {Stepper, Step} from "@material-tailwind/react";
import toast from "react-hot-toast";
import Image from "next/image";
import avatar from "../../../assets/blank-profile-picture-973460_1280.png";
import {useRouter} from "next/navigation";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";

const HostRegister = () => {
    const {token} = useUserContext();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    console.log(loading);

    useEffect(() => {
        if (token) {
            router.push("/");
        }
    }, [token]);
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);
    const [file, setFile] = useState(null);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const [inputData, setInputData] = useState({
        username: "",
        company_name: "",
        Company_house_registration_number: "",
        Vat_number: "",
        mobile: "",
        address_line1: "",
        address_line_2: "",
        city: "",
        county: "",
        post_code: "",
        full_name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputData((previnputData) => ({
            ...previnputData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = Object.keys(inputData).filter(
            (key) => key !== "Vat_number" && !inputData[key]
        );

        if (requiredFields.length > 0)
            return toast.error("Please fill the form properly.");

        if (inputData.password !== inputData.confirm_password)
            return toast.error("Passwords do not match.");

        const formData = new FormData();
        formData.append("file", file);
        setLoading(true);

        const host_data = {
            username: inputData.username,
            email: inputData.email,
            password: inputData.password,
            confirm_password: inputData.confirm_password,
            host_profile: {
                full_name: inputData.full_name,
                address_line1: inputData.address_line1,
                address_line_2: inputData.address_line_2,
                city: inputData.city,
                county: inputData.county,
                post_code: inputData.post_code,
                company_name: inputData.company_name,
                Company_house_registration_number:
                    inputData?.Company_house_registration_number,
                Vat_number: inputData.Vat_number,
                mobile: inputData.mobile,
                // profile_pic: formData,
            },
        };

        try {
            const response = await fetch(
                `http://127.0.0.1:8000/host-registration/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(host_data),
                }
            );
            const data = await response.json();
            setLoading(false);
            if (data.role == "host") {
                toast.success("Account created successfully.");
                router.push("/authtentication/login");
            } else {
                return toast.error(
                    data?.username || data?.email || "Something went wrong"
                );
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <div className="container">
            <form
                onSubmit={handleSubmit}
                className={`bg-blue-gray-50 mx-auto rounded-md md:p-8 p-5 md:mt-10 mt-8 ${
                    activeStep == 0 ? "md:max-w-4xl" : "md:max-w-xl"
                }`}>
                <Stepper
                    className="mb-3"
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}>
                    <Step onClick={() => setActiveStep(0)}>1</Step>
                    <Step onClick={() => setActiveStep(1)}>2</Step>
                </Stepper>
                <div>
                    {activeStep === 0 && (
                        <div className="fade-in md:grid md:grid-cols-2 gap-x-10 md:gap-y-3">
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Full name
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="full_name"
                                    type="text"
                                    name="full_name"
                                    placeholder="Enter full_name..."
                                    value={inputData.full_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Company Name
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="company_name"
                                    type="text"
                                    name="company_name"
                                    placeholder="Enter company name..."
                                    value={inputData.company_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Company house registration number
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="Company_house_registration_number"
                                    type="text"
                                    name="Company_house_registration_number"
                                    placeholder="Enter company house registration number..."
                                    value={
                                        inputData.Company_house_registration_number
                                    }
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    VAT number(optional)
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="Vat_number"
                                    type="text"
                                    name="Vat_number"
                                    placeholder="Enter VAT number(optional)..."
                                    value={inputData.Vat_number}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Mobile number
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="mobile"
                                    type="text"
                                    name="mobile"
                                    placeholder="Enter mobile number..."
                                    value={inputData.mobile}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Address line 1
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="address_line1"
                                    type="text"
                                    name="address_line1"
                                    placeholder="Enter address_line1 "
                                    value={inputData.address_line1}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Address line 2
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="address_line_2"
                                    type="text"
                                    name="address_line_2"
                                    placeholder="Enter address line 2..."
                                    value={inputData.address_line_2}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    City
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="city"
                                    type="text"
                                    name="city"
                                    placeholder="Enter city..."
                                    value={inputData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    County
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="county"
                                    type="text"
                                    name="county"
                                    placeholder="Enter county..."
                                    value={inputData.county}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Postcode
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="post_code"
                                    type="text"
                                    name="post_code"
                                    placeholder="Enter post code..."
                                    value={inputData.post_code}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    )}
                    {activeStep === 1 && (
                        <div>
                            <div className="mt-2">
                                {file ? (
                                    <div className="w-full flex justify-center items-center flex-col ">
                                        <label
                                            htmlFor="file"
                                            className="relative">
                                            <Image
                                                src={URL.createObjectURL(file)}
                                                className="h-28 w-28 rounded-full"
                                                alt="profile"
                                                width={110}
                                                height={110}
                                            />
                                            <input
                                                type="file"
                                                name="file"
                                                id="file"
                                                accept=".png,.jpg,.jpeg"
                                                className="hidden"
                                                onChange={(e) =>
                                                    setFile(e.target.files[0])
                                                }
                                            />
                                        </label>
                                    </div>
                                ) : (
                                    <div className="w-full flex justify-center items-center flex-col ">
                                        <label
                                            htmlFor="file"
                                            className="relative">
                                            <Image
                                                src={avatar}
                                                className="h-24 bg-contain w-24 rounded-full"
                                                alt="profile"
                                                width={110}
                                                height={110}
                                            />

                                            <input
                                                type="file"
                                                name="profileImg"
                                                id="file"
                                                accept=".png,.jpg,.jpeg"
                                                className="hidden"
                                                onChange={(e) =>
                                                    setFile(e.target.files[0])
                                                }
                                            />
                                        </label>
                                    </div>
                                )}
                            </div>

                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Username
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="username"
                                    type="text"
                                    name="username"
                                    placeholder="Enter username..."
                                    value={inputData.username}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Email Address
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3  focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter email..."
                                    value={inputData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Password
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3  focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Enter password..."
                                    value={inputData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Confirm password
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3  focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="confirm_password"
                                    type="password"
                                    name="confirm_password"
                                    placeholder="Confirm password..."
                                    value={inputData.confirm_password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div
                    className={`mt-6  flex  ${
                        activeStep == 1 ? "justify-between" : "justify-end"
                    } `}>
                    <div
                        className={`btn-primary ${
                            activeStep == 0 && "hidden btn-primary"
                        }`}
                        onClick={handlePrev}
                        disabled={isFirstStep}>
                        Prev
                    </div>
                    <div
                        className={` btn-primary ${
                            activeStep == 1 && "hidden "
                        }`}
                        onClick={handleNext}
                        disabled={isLastStep}>
                        Next
                    </div>
                    {activeStep == 1 && (
                        <button
                            disabled={loading}
                            type="submit"
                            className={`btn-secondary ${
                                loading && "bg-blue-gray-500"
                            }`}>
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default HostRegister;
