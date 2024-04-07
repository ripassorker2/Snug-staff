/* eslint-disable @next/next/no-img-element */
"use client";
import GalleryModal from "@/app/components/GalleryModal/GalleryModal";
import Image from "next/image";
import React, {useState} from "react";
import {BiSolidGrid} from "react-icons/bi";
import {MdOutlineChecklistRtl, MdOutlineStar} from "react-icons/md";
import DatePicker from "../../pages/Properties/DatePicker";
import {useGetPropertyDetailsQuery} from "@/redux/api/propertyApi";
import Loading from "@/app/profile_page/loading";
import Maps from "../../pages/Properties/GoogleMap";

const PropertyDetails = ({params}) => {
    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState(null);
    const handleDateChange = (newValue) => {
        setDate(newValue);
    };

    const {data: property, isLoading} = useGetPropertyDetailsQuery({
        slug: params.id,
    });
    console.log(property);

    if (isLoading) return <Loading />;

    return (
        <div className="container">
            <div className="md:mt-20 mt-12">
                <div className="w-full grid md:grid-cols-5 gap-3 md:rounded-l-xl rounded-xl overflow-hidden">
                    <figure className="md:h-[510px] overflow-hidden md:col-span-3">
                        <img
                            src={property?.property_images[0]?.image}
                            className="w-full h-full  object-cover object-center hover:scale-105 duration-300   "
                            alt="property image"
                        />
                    </figure>
                    <div className="md:col-span-2 grid gap-2 md:rounded-r-xl md:rounded-b-none rounded-b-xl overflow-hidden">
                        <figure className="overflow-hidden md:h-[250px]">
                            <img
                                src={property?.property_images[1]?.image}
                                className="w-full h-full  object-cover object-center hover:scale-105 duration-300"
                                alt="property image"
                            />
                        </figure>
                        <figure className="overflow-hidden md:h-[250px] relative">
                            <img
                                src={property?.property_images[2]?.image}
                                className="w-full h-full  object-cover object-center hover:scale-105 duration-300"
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
                <div className="mt-6 md:grid md:grid-cols-5 gap-3">
                    <div className="md:col-span-3">
                        <h2 className="md:text-2xl text-xl mb-2">
                            {property?.title}
                        </h2>
                        <div className="flex space-x-3 md:space-y-0 space-y-2 flex-wrap items-center mb-2 -ml-3">
                            <button className="hidden"></button>
                            <button className="border-[2px]  shadow-md  rounded-lg px-2 py-1">
                                {property?.bed_room} bedrooms
                            </button>
                            <button className="border-[2px] shadow-md  rounded-lg px-2 py-1">
                                {property?.bath_room} bathrooms
                            </button>
                            <button className="border-[2px]  shadow-md  rounded-lg px-2 py-1">
                                {property?.minimum_guest || 0} min guest
                            </button>
                            <button className="border-[2px]  shadow-md  rounded-lg px-2 py-1">
                                {property?.maximum_guest || 0} max guest
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
                                    src={property?.logo}
                                    className="rounded-full object-contain border w-12 h-12 border-gray-400"
                                    height={50}
                                    width={50}
                                    alt="host image"
                                />
                                <div className="leading-5">
                                    <b>Hosted by </b>
                                    <p>{property?.author}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xl ">About property</h2>
                            <p className="desc pt-1">
                                {property?.short_description}
                            </p>
                            <p className="desc pt-4">{property?.description}</p>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xl ">What this place offers</h2>
                            <div className="flex space-x-3 space-y-3 flex-wrap items-center -ml-3">
                                <button className="hidden"></button>
                                {property?.aminites?.map((amenity, i) => (
                                    <button
                                        key={i}
                                        className=" inline-flex items-center border-[2px]  rounded-lg px-2 py-1 shadow-md ">
                                        <MdOutlineChecklistRtl className="font-bold text-xl mr-1.5" />{" "}
                                        {amenity.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 md:w-[80%] mx-auto md:mb-0 mb-10 md:mt-32 mt-14 text-gray-800">
                        <DatePicker
                            date={date}
                            handleDateChange={handleDateChange}
                        />
                    </div>
                </div>
                <div className="mt-12 ">
                    <Maps
                        data={{
                            lat: `${property?.latitude}`,
                            lng: `${property?.longtitude}`,
                            address: `${property?.location}`,
                        }}
                    />
                </div>
            </div>
            {showModal && (
                <GalleryModal
                    images={property?.property_images}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    );
};

export default PropertyDetails;
