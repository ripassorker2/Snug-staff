import Image from "next/image";
import React from "react";

const Step3 = ({
    images,
    formData,
    bedrooms,
    bathrooms,
    guests,
    parking,
    aminites,
    selectedAmenities,
}) => {
    return (
        <div className="text-gray-800 text-base">
            <h2 className="md:text-xl text-lg pb-3">
                <span>Preview of property</span>
            </h2>
            <div className="mb-5">
                <h2 className="text-base pb-2">Property images</h2>
                {images.length > 0 ? (
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-6 ">
                        {images?.map((img, i) => (
                            <Image
                                key={i}
                                src={img.preview}
                                className={`w-full rounded-md object-center object-cover ${
                                    i === 0
                                        ? "md:col-span-3 col-span-2 max-h-[350px]"
                                        : "md:h-[200px] h-[110px]"
                                }`}
                                height={200}
                                width={200}
                                alt={"proterty image"}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-red-500">
                        No images. Please select at least 4 image.
                    </p>
                )}
            </div>

            <div>
                <h2 className=" mb-4">
                    Property category : {formData.category || "none"}
                </h2>
                <h2 className="md:text-2xl text-xl mb-2">
                    Property title : {formData.title}
                </h2>
                <div className="flex space-x-3 space-y-3 flex-wrap items-center mb-2">
                    <button className="bg-gray-300  rounded-lg px-2 py-1 hidden"></button>
                    <button className="bg-gray-300  rounded-lg px-2 py-1">
                        {bedrooms} bedrooms
                    </button>
                    <button className="bg-gray-300  rounded-lg px-2 py-1">
                        {bathrooms} bathrooms
                    </button>
                    <button className="bg-gray-300  rounded-lg px-2 py-1">
                        {guests} guests
                    </button>
                </div>
                <div className="md:flex md:space-x-8 flex-wrap mb-2">
                    <h2 className=" my-3 font-semibold ">
                        Property price : ${formData.price || 0}
                    </h2>
                    <h2 className=" my-3">
                        <b>Property area</b> : {formData.area || 0}
                    </h2>
                </div>
                <h2 className="my-3">
                    <b> Parking area : </b>
                    {parking ? "Available" : "Not available"}
                </h2>
                <h2 className="my-3">
                    <b>Location : </b>
                    {formData.location || (
                        <button className="text-red-500 ">
                            Please provide property location.
                        </button>
                    )}
                </h2>

                <div className="my-3">
                    <b>Short description</b>
                    {formData.short_description ? (
                        <>
                            {formData.short_description
                                ?.split("\n")
                                ?.map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                        </>
                    ) : (
                        <>
                            <p className="text-red-500 ">
                                Please provide short description.
                            </p>
                        </>
                    )}
                </div>
                <div className="my-3">
                    <b> Description </b>
                    {formData.description ? (
                        <>
                            {formData.description
                                ?.split("\n")
                                ?.map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                        </>
                    ) : (
                        <>
                            <p className="text-red-500 ">
                                Please provide description.
                            </p>
                        </>
                    )}
                </div>

                <div className="my-3">
                    <b> What this place offers</b>
                    {selectedAmenities?.length ? (
                        <div className="flex space-x-3 space-y-3 flex-wrap items-center">
                            <button className="hidden"></button>
                            {aminites.map((aminite) => (
                                <>
                                    <button className="bg-gray-300  rounded-lg px-2 py-1">
                                        {aminite.name}
                                    </button>
                                </>
                            ))}
                        </div>
                    ) : (
                        <>
                            <br />
                            <button className="bg-gray-300  rounded-lg mt-2 px-2 py-1">
                                Nothing
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Step3;
