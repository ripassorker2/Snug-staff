"use client";
import GalleryModal from "@/app/components/GalleryModal/GalleryModal";
import Image from "next/image";
import React, {useState} from "react";
import {BiSolidGrid} from "react-icons/bi";
import {MdOutlineStar} from "react-icons/md";
import userImage from "../../../assets/profile-circle.1023x1024.png";
import Datepicker from "react-tailwindcss-datepicker";

const PropertyDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11),
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };
    console.log(value);

    const today = new Date();

    // Calculate the date after 3 days
    const afterThreeDays = new Date(today);
    afterThreeDays.setDate(afterThreeDays.getDate() + 1);

    // Calculate the date after 30 days
    const afterThirtyDays = new Date(today);
    afterThirtyDays.setDate(afterThirtyDays.getDate() + 30);

    // Format dates in "YYYY-MM-DD" format
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const todayDate = formatDate(today);
    const afterThreeDaysDate = formatDate(afterThreeDays);
    const afterThirtyDaysDate = formatDate(afterThirtyDays);

    return (
        <div className="container">
            <div className="mt-20">
                <div className="w-full grid md:grid-cols-5 gap-3">
                    <figure className="md:h-[510px] overflow-hidden col-span-3">
                        <Image
                            src={
                                "https://www.mashvisor.com/blog/wp-content/uploads/2018/04/bigstock-Row-Of-New-Suburban-Homes-55511546.jpg"
                            }
                            className="w-full h-full  object-cover object-center hover:scale-105 duration-300 rounded-l-xl  "
                            width={200}
                            height={200}
                            alt="property image"
                        />
                    </figure>
                    <div className="col-span-2 grid gap-2 rounded-r-xl overflow-hidden">
                        <figure className="overflow-hidden md:h-[250px]">
                            <Image
                                src={
                                    "https://www.mashvisor.com/blog/wp-content/uploads/2018/04/bigstock-Row-Of-New-Suburban-Homes-55511546.jpg"
                                }
                                className="w-full h-full  object-cover object-center hover:scale-105 duration-300"
                                width={200}
                                height={200}
                                alt="property image"
                            />
                        </figure>
                        <figure className="overflow-hidden md:h-[250px] relative">
                            <Image
                                src={
                                    "https://www.mashvisor.com/blog/wp-content/uploads/2018/04/bigstock-Row-Of-New-Suburban-Homes-55511546.jpg"
                                }
                                className="w-full h-full  object-cover object-center hover:scale-105 duration-300"
                                width={200}
                                height={200}
                                alt="property image"
                            />
                            <button
                                onClick={() => setShowModal(true)}
                                className="bg-gray-100 text-gray-800 px-3 py-2 rounded-xl absolute bottom-4 right-4 inline-flex items-center space-x-1 text-sm">
                                <BiSolidGrid size={19} className="mr-2" />
                                Show all photos
                            </button>
                        </figure>
                    </div>
                </div>
                <div className="mt-6 grid md:grid-cols-5 gap-3">
                    <div className="md:col-span-3">
                        <h2 className="md:text-2xl text-xl mb-2">
                            This is a demo title
                        </h2>
                        <div className="flex space-x-3 md:space-y-0 space-y-2 flex-wrap items-center mb-2 -ml-3">
                            <button className="bg-gray-300  rounded-lg px-2 py-1 hidden"></button>
                            <button className="bg-gray-300  rounded-lg px-2 py-1">
                                3 bedrooms
                            </button>
                            <button className="bg-gray-300  rounded-lg px-2 py-1">
                                2 bathrooms
                            </button>
                            <button className="bg-gray-300  rounded-lg px-2 py-1">
                                3 guests
                            </button>
                        </div>
                        <div className="my-6">
                            <div className=" flex  items-center space-x-4">
                                <div className="flex items-center flex-col justify-center">
                                    <b>4.7</b>
                                    <div className="flex items-center text-xl font-semibold text-yellow-500">
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                    </div>
                                </div>
                                <div className="flex items-center flex-col justify-center border-l-2 border-gray-400 pl-4">
                                    <b>47</b>
                                    <b>Reviews</b>
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="flex space-x-2 items-center">
                                <Image
                                    src={userImage}
                                    className="rounded-full"
                                    height={50}
                                    width={50}
                                    alt="host image"
                                />
                                <div className="leading-5">
                                    <b>Hosted by </b>
                                    <p>Ripas Sorker Rifat</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xl ">About property</h2>
                            <p className="desc pt-1">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Repellendus architecto
                                pariatur cumque consectetur. Praesentium cumque
                                delectus atque sequi! Esse, in molestiae.
                                Perferendis vel explicabo cum eius eum itaque
                                fugiat soluta!
                            </p>
                            <p className="desc pt-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Repellendus architecto
                                pariatur cumque consectetur. Praesentium cumque
                                delectus atque sequi! Esse, in molestiae. <br />
                                Perferendis vel explicabo cum eius eum itaque
                                fugiat soluta! Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. <br /> Dolore
                                magni natus voluptas sint facere, error
                                molestias, consectetur laborum aspernatur
                                blanditiis deleniti dolores dolorem at voluptate
                                nemo aliquid. Quia, similique ad.
                            </p>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xl ">What this place offers</h2>
                            <div className="flex space-x-3 space-y-3 flex-wrap items-center -ml-3">
                                <button className="hidden"></button>
                                <button className="bg-gray-300  rounded-lg px-2 py-1">
                                    Free Wi-fi
                                </button>
                                <button className="bg-gray-300  rounded-lg px-2 py-1">
                                    Free Wi-fi
                                </button>
                                <button className="bg-gray-300  rounded-lg px-2 py-1">
                                    Free Wi-fi
                                </button>
                                <button className="bg-gray-300  rounded-lg px-2 py-1">
                                    Free Wi-fi
                                </button>
                                <button className="bg-gray-300  rounded-lg px-2 py-1">
                                    Free Wi-fi
                                </button>
                                <button className="bg-gray-300  rounded-lg px-2 py-1">
                                    Free Wi-fi
                                </button>
                                <button className="bg-gray-300  rounded-lg px-2 py-1">
                                    Free Wi-fi
                                </button>
                                <button className="bg-gray-300  rounded-lg px-2 py-1">
                                    Free Wi-fi
                                </button>
                                <button className="bg-gray-300  rounded-lg px-2 py-1">
                                    Free Wi-fi
                                </button>
                                <button className="bg-gray-300  rounded-lg px-2 py-1">
                                    Parking
                                </button>
                                <button className="bg-gray-300  rounded-lg px-2 py-1">
                                    Free Wi-fi
                                </button>
                                <button className="bg-gray-300  rounded-lg px-2 py-1">
                                    Freezz
                                </button>
                                <button className="bg-gray-300  rounded-lg px-2 py-1">
                                    Free Wi-fi
                                </button>
                                <button className="bg-gray-300  rounded-lg px-2 py-1">
                                    Free Wi-fi
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:w-[80%] mx-auto md:mt-32 mt-14 text-gray-800">
                        <div className="shadow-lg p-6 border rounded-xl border-gray-300">
                            <h2 className="font-semibold text-gray-800 pb-3 ">
                                $94/night
                            </h2>
                            <Datepicker
                                containerClassName="relative border border-gray-400 rounded-xl"
                                inputClassName={
                                    "p-2 m-1 w-[80%] rounded-md focus:ring-0 font-normal placeholder:text-gray-700 focus:outline-none"
                                }
                                value={value}
                                primaryColor={"blue"}
                                startFrom={new Date(todayDate)}
                                endDate={new Date() + 30}
                                separator="-"
                                onChange={handleValueChange}
                                displayFormat={"DD/MM/YYYY"}
                                minDate={new Date(afterThreeDaysDate)}
                                maxDate={new Date(afterThirtyDaysDate)}
                                toggleClassName="absolute bg-primary rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                            />
                            <div className="flex justify-between items-center space-x-2 p-1 font-medium mt-2">
                                <p>$104 x 17 nights price</p>
                                <p>$594</p>
                            </div>
                            <div className="flex justify-between items-center space-x-2 p-1 font-medium mt-2">
                                <p>Cleaning fee </p>
                                <p>$194</p>
                            </div>
                            <div className="flex justify-between items-center space-x-2 p-1 font-medium mt-2 border-b-2">
                                <p>Service fee </p>
                                <p>$134</p>
                            </div>
                            <div className="flex justify-between items-center space-x-2 p-1 mt-2 font-semibold">
                                <p>Total fee </p>
                                <p>$1134</p>
                            </div>
                            <div className="mt-3">
                                <button className="btn-secondary w-full">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <GalleryModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    );
};

export default PropertyDetails;
