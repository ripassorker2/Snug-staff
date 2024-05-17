import Image from "next/image";
import React from "react";
import {FaArrowRight, FaUser} from "react-icons/fa";
import {MdOutlineBathroom, MdOutlineBedroomParent} from "react-icons/md";
import Link from "next/link";

const PropertyCard = ({property}) => {
    const cardImage = property?.property_images?.find(
        (pr) => pr.is_featured == true
    );
    return (
        <div className={`border rounded-xl border-[#CEDFEB] shadow-lg p-6`}>
            <figure className={` overflow-hidden h-[240px] `}>
                <Image
                    src={cardImage?.image}
                    width={200}
                    height={200}
                    className="rounded-xl w-full h-full  object-cover object-center hover:scale-105  duration-300"
                    alt="property images"
                />
            </figure>

            <div
                className={`flex  flex-wrap items-center my-2 text-sm space-x-3 -ml-2.5 `}>
                <button className="hidden "></button>
                <button className=" inline-flex items-center border-[2px]  shadow-md  rounded-lg px-2 py-1">
                    <MdOutlineBedroomParent size={14} className="mr-1" />{" "}
                    {property.bed_room} bed
                </button>
                <button className=" inline-flex items-center border-[2px]  shadow-md  rounded-lg px-2 py-1">
                    <MdOutlineBathroom size={14} className="mr-1" />
                    {property.bath_room} bath
                </button>
                <button className=" inline-flex items-center border-[2px]  shadow-md  rounded-lg px-2 py-1">
                    <FaUser size={14} className=" mr-1" />
                    {property.minimum_guest} min guest
                </button>
            </div>
            <div className="mt-2 leading-5 text-base">
                <h3 className="text-lg font-semibold text-gray-800">
                    {property?.title?.length > 55
                        ? `${property?.title.slice(0, 55)}...`
                        : property.title}
                </h3>

                <p className="pt-2">
                    <b>${property?.price} </b>
                    per person/night
                </p>
            </div>
            <Link href={`/properties/${property?.slug}`}>
                <button className="btn-secondary mt-2 w-full rounded-lg group">
                    More details{" "}
                    <FaArrowRight className="ml-2 group-hover:ml-4 duration-300 " />
                </button>
            </Link>
        </div>
    );
};

export default PropertyCard;
