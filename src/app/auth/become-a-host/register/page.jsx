/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, {useEffect, useState} from "react";
import {Stepper, Step} from "@material-tailwind/react";
import toast from "react-hot-toast";
import Image from "next/image";
import avatar from "../../../../assets/blank-profile-picture-973460_1280.png";
import {useRouter} from "next/navigation";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import {config} from "@/envConfig/envConfig";
import SmallLoader from "@/app/components/SmallLoader/SmallLoader";

const HostRegister = () => {
    const {token} = useUserContext();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (token) router.push("/");
    }, [token]);
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const [file, setFile] = useState("");

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

        if (requiredFields?.length > 0)
            return toast.error("Please fill the form properly.");

        if (inputData.password !== inputData.confirm_password)
            return toast.error("Passwords do not match.");

        setLoading(true);

        const formData = new FormData();
        if (file) formData.append("host_profile.profile_pic", file);

        // Append all other form data to formData
        formData.append("username", inputData.username);
        formData.append("email", inputData.email);
        formData.append("password", inputData.password);
        formData.append("confirm_password", inputData.confirm_password);

        // Append host_profile data
        formData.append("host_profile.full_name", inputData.full_name);
        formData.append("host_profile.address_line1", inputData.address_line1);
        formData.append(
            "host_profile.address_line_2",
            inputData.address_line_2
        );
        formData.append("host_profile.city", inputData.city);
        formData.append("host_profile.county", inputData.county);
        formData.append("host_profile.post_code", inputData.post_code);
        formData.append("host_profile.company_name", inputData.company_name);
        formData.append(
            "host_profile.Company_house_registration_number",
            inputData.Company_house_registration_number
        );
        formData.append("host_profile.Vat_number", inputData.Vat_number);
        formData.append("host_profile.phone", inputData.mobile);

        try {
            const response = await fetch(
                `${config.base_url}/host-registration/`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            const data = await response.json();
            setLoading(false);
            if (data.success) {
                toast.success("Account created successfully.");
                router.push("/authtentication/login");
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="container">
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className={`bg-blue-gray-50 mx-auto rounded-md md:p-8 p-5 md:mt-10 mt-8 md:max-w-4xl`}>
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
                        <div className=" md:grid md:grid-cols-2 gap-x-10 md:gap-y-3">
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Full name
                                </label>
                                <input
                                    className="input-feild"
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
                                    className="input-feild"
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
                                    className="input-feild"
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
                                    className="input-feild"
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
                                    className="input-feild"
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
                                    className="input-feild"
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
                                    className="input-feild"
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
                                    className="input-feild"
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
                                    className="input-feild"
                                    id="county"
                                    type="text"
                                    name="county"
                                    placeholder="Enter county  or state..."
                                    value={inputData.county}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Postcode
                                </label>
                                <input
                                    className="input-feild"
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
                                                className="h-32 w-32 rounded-full"
                                                width={110}
                                                height={110}
                                                alt="profile"
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
                                                className="h-32 bg-contain w-32 rounded-full"
                                                alt="profile"
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
                            <div className="md:grid md:grid-cols-2 gap-x-10 md:gap-y-3">
                                <div className="mt-2">
                                    <label className="block text-base mb-1">
                                        Username
                                    </label>
                                    <input
                                        className="input-feild"
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
                                        className="input-feild"
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
                                        className="input-feild"
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
                                        className="input-feild"
                                        id="confirm_password"
                                        type="password"
                                        name="confirm_password"
                                        placeholder="Confirm password..."
                                        value={inputData.confirm_password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div
                    className={`mt-6  flex   ${
                        activeStep == 1 ? "justify-between" : "justify-end"
                    } `}>
                    <div
                        className={`btn-primary mr-6 ${
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
                            className="btn-secondary ">
                            {loading ? <SmallLoader /> : "Sign up now"}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default HostRegister;
