"use client";

import React, {useState} from "react";
import {Stepper, Step} from "@material-tailwind/react";
import toast from "react-hot-toast";
import Image from "next/image";
import avatar from "../../../assets/blank-profile-picture-973460_1280.png";

const DefaultStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);
    const [file, setFile] = useState(null);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const [inputData, setInputData] = useState({
        username: "",
        company_name: "",
        company_reg_num: "",
        vat_num: "",
        mobile_number: "",
        address: "",
        address_line_2: "",
        city: "",
        country: "",
        post_code: "",
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
            (key) => key !== "vat_num" && !inputData[key]
        );

        if (requiredFields.length > 0)
            return toast.error("Please fill the all fields properly.");

        const formData = new FormData();
        formData.append("file", file);
        console.log(formData);
        console.log(file);

        // const data = {
        //     username: inputData.username,
        //     email: inputData.email,
        //     password: inputData.password,
        //     confirm_password: inputData.confirm_password,
        //     host_profile: {
        //         address: inputData.address,
        //         address_line_2: inputData.address_line_2,
        //         city: inputData.city,
        //         country: inputData.country,
        //         post_code: inputData.post_code,
        //         company_name: inputData.company_name,
        //         company_reg_num: inputData?.company_reg_num,
        //         vat_num: inputData.vat_num,
        //         mobile_number: inputData.mobile_number,
        //         profile_pic: formData,
        //     },
        // };

        // console.log(data);
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
                                    Userame:
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="username"
                                    type="text"
                                    name="username"
                                    placeholder="Enter username..."
                                    required
                                    value={inputData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Company Name:
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="company_name"
                                    type="text"
                                    name="company_name"
                                    placeholder="Enter company name..."
                                    required
                                    value={inputData.company_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Company house registration number:
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="company_reg_num"
                                    type="text"
                                    name="company_reg_num"
                                    placeholder="Enter company house registration number..."
                                    required
                                    value={inputData.company_reg_num}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    VAT number(optional):
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="vat_num"
                                    type="text"
                                    name="vat_num"
                                    placeholder="Enter VAT number(optional)..."
                                    required
                                    value={inputData.vat_num}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Mobile number:
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="mobile_number"
                                    type="text"
                                    name="mobile_number"
                                    placeholder="Enter mobile number..."
                                    value={inputData.mobile_number}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Address:
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="address"
                                    type="text"
                                    name="address"
                                    placeholder="Enter address "
                                    required
                                    value={inputData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Address line 2:
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="address_line_2"
                                    type="text"
                                    name="address_line_2"
                                    placeholder="Enter address line 2..."
                                    required
                                    value={inputData.address_line_2}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    City:
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="city"
                                    type="text"
                                    name="city"
                                    placeholder="Enter city..."
                                    required
                                    value={inputData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Country:
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="country"
                                    type="text"
                                    name="country"
                                    placeholder="Enter country..."
                                    required
                                    value={inputData.country}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Postcode:
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="post_code"
                                    type="text"
                                    name="post_code"
                                    placeholder="Enter post code..."
                                    required
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
                                    Email Address
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3  focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter email..."
                                    required
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
                                    required
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
                                    required
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
                    <button
                        className={`btn-primary ${
                            activeStep == 0 && "hidden btn-primary"
                        }`}
                        onClick={handlePrev}
                        disabled={isFirstStep}>
                        Prev
                    </button>
                    <button
                        className={` btn-primary ${
                            activeStep == 1 && "hidden "
                        }`}
                        onClick={handleNext}
                        disabled={isLastStep}>
                        Next
                    </button>
                    {activeStep == 1 && (
                        <button type="submit" className="btn-secondary">
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default DefaultStepper;
