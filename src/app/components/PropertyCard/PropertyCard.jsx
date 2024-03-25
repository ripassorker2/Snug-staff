import Image from "next/image";
import React from "react";
import {FaArrowRight, FaUser} from "react-icons/fa";
import {MdOutlineBathroom, MdOutlineBedroomParent} from "react-icons/md";
import image from "../../../assets/accomodation2.jpg";
import Link from "next/link";

const PropertyCard = () => {
    return (
        <div className="border border-gray-400 p-4 hover:border-gray-500 duration-300 rounded-xl shadow-md">
            <figure className="h-[250px] overflow-hidden">
                <Image
                    // src={dt.property_images[0].image}
                    src={image}
                    width={200}
                    height={200}
                    className="rounded-xl w-full h-full  object-cover object-center hover:scale-105 hover:skew-x-2 duration-300"
                    alt="property images"
                />
            </figure>

            <div className="flex space-x-3 space-y-3 -ml-3 flex-wrap items-center my-2 text-sm">
                <button className="hidden "></button>
                <button className="bg-gray-300  inline-flex items-center rounded-lg px-2 py-1">
                    <MdOutlineBedroomParent size={14} className="mr-1" />{" "}
                    {/* {dt.bed_room} */}4 bed
                </button>
                <button className="bg-gray-300  inline-flex items-center rounded-lg px-2 py-1">
                    <MdOutlineBathroom size={14} className="mr-1" />
                    {/* {dt.bath_room} */}3 bath
                </button>
                <button className="bg-gray-300  inline-flex items-center rounded-lg px-2 py-1">
                    <FaUser size={14} className=" mr-1" />
                    {/* {dt.guest} */}2 guest
                </button>
            </div>
            <div className="mt-3 leading-5 text-base">
                <h3 className="text-lg font-semibold text-gray-800">
                    {/* {dt.title.length > 55
                        ? `${dt.title.slice(0, 55)}...`
                        : dt.title} */}
                    this is a title
                </h3>

                <p className="pt-2">
                    {/* <b>${dt.price}</b> */}
                    $978 per person/night
                </p>
            </div>
            <Link href={`/properties/demo_id_123`}>
                <button className="btn-secondary mt-4 w-full rounded-lg group">
                    More details{" "}
                    <FaArrowRight className="ml-2 group-hover:ml-4 duration-300 " />
                </button>
            </Link>
        </div>
    );
};

export default PropertyCard;
