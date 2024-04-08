import Image from "next/image";
import React from "react";
import {FaUser} from "react-icons/fa";
import {
    MdOutlineBathroom,
    MdOutlineBedroomParent,
    MdOutlineChecklistRtl,
    MdOutlineStar,
} from "react-icons/md";

const BasicInfo = ({property}) => {
    return (
        <div className="">
            <h2 className="md:text-2xl text-xl mb-2">{property?.title}</h2>
            <div className="flex space-x-3 md:space-y-0 space-y-2 flex-wrap items-center mb-2 -ml-3">
                <button className="hidden"></button>
                <button className="inline-flex items-center  border-[2px]  shadow-md  rounded-lg px-2 py-1">
                    <MdOutlineBedroomParent
                        size={14}
                        className="mr-1 -mt-0.5"
                    />{" "}
                    {property?.bed_room} bedrooms
                </button>
                <button className="inline-flex items-center  border-[2px] shadow-md  rounded-lg px-2 py-1">
                    <MdOutlineBathroom size={14} className="mr-1 -mt-0.5" />{" "}
                    {property?.bath_room} bathrooms
                </button>
                <button className="inline-flex items-center  border-[2px]  shadow-md  rounded-lg px-2 py-1">
                    <FaUser size={14} className=" mr-1 -mt-0.5" />{" "}
                    {property?.minimum_guest || 0} min guest
                </button>
                <button className="inline-flex items-center  border-[2px]  shadow-md  rounded-lg px-2 py-1">
                    <FaUser size={14} className=" mr-1 -mt-0.5" />{" "}
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
            <div className="mt-4 ">
                <h2 className="text-xl mb-1">About property</h2>
                <div className="desc">
                    {property?.short_description
                        ?.split("\n")
                        ?.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    <p className=" pt-4"></p>
                    {property?.description?.split("\n")?.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-xl ">What this place offers</h2>
                <div className="flex space-x-3 space-y-3 flex-wrap items-center -ml-3">
                    <button className="hidden"></button>
                    {property?.aminites?.map((amenity, i) => (
                        <button
                            key={i}
                            className=" inline-flex items-center border-[2px]  rounded-lg px-2 py-1 shadow-md ">
                            <MdOutlineChecklistRtl className="font-bold text-xl mr-1.5" />
                            {amenity.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;
