/* eslint-disable @next/next/no-img-element */
import React from "react";
import {BiSolidGrid} from "react-icons/bi";

const PropertyImages = ({property, setShowModal}) => {
    const showcaseImage = property?.property_images?.filter(
        (pr) => pr.is_showcased == true
    );
    return (
        <div className="w-full grid md:grid-cols-5 gap-3 md:rounded-l-xl rounded-xl overflow-hidden">
            <figure className="md:h-[510px] h-[280px] overflow-hidden md:col-span-3">
                <img
                    src={showcaseImage[0]?.image}
                    className="w-full h-full  object-cover object-center hover:scale-105 duration-300   "
                    alt="property image"
                />
            </figure>
            <div className="md:col-span-2 grid gap-2 md:rounded-r-xl md:rounded-b-none rounded-b-xl overflow-hidden">
                <figure className="overflow-hidden md:h-[250px] h-[280px]">
                    <img
                        src={showcaseImage[1]?.image}
                        className="w-full h-full  object-cover object-center hover:scale-105 duration-300"
                        alt="property image"
                    />
                </figure>
                <figure className="overflow-hidden md:h-[250px] relative h-[280px]">
                    <img
                        src={showcaseImage[2]?.image}
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
    );
};

export default PropertyImages;
