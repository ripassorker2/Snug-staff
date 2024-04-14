import Image from "next/image";
import React from "react";

const Step3 = ({
    categories,
    featureImage,
    showcaseImages,
    listImages,
    formData,
    buttonData,
    parking,
    selectedAmenities,
    aminites,
}) => {
    return (
        <div className="text-gray-800 text-base">
            <div className="mb-3">
                <h2>
                    <b>Feature image</b>
                </h2>
                {featureImage ? (
                    <div className="relative ">
                        <Image
                            src={featureImage.preview}
                            alt="Feature Image Preview"
                            height={200}
                            width={200}
                            className="rounded-md md:h-[400px] h-[230px] object-cover object-center w-full"
                        />
                    </div>
                ) : (
                    <p className="text-red-500">
                        Please select a feature image.
                    </p>
                )}
            </div>
            <div className="mb-3">
                <h2>
                    <b>Showcase images</b>
                </h2>
                {showcaseImages?.length ? (
                    <div className="grid md:grid-cols-3 gap-3 grid-cols-2">
                        {showcaseImages.map((image, index) => (
                            <div key={index} className="relative">
                                <Image
                                    src={image.preview}
                                    alt={`Showcase Image Preview ${index}`}
                                    height={200}
                                    width={200}
                                    className="rounded-md md:h-[240px] h-[130px] object-cover object-center w-full"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-red-500">
                        Please select 3 showcase image.
                    </p>
                )}
            </div>
            <div className="mb-3">
                <h2>
                    <b>Gallery images</b>
                </h2>
                {listImages?.length ? (
                    <div className="grid md:grid-cols-3 gap-3 grid-cols-2">
                        {listImages.map((image, index) => (
                            <div key={index} className="relative">
                                <Image
                                    src={image.preview}
                                    alt={`Showcase Image Preview ${index}`}
                                    height={200}
                                    width={200}
                                    className="rounded-md md:h-[240px] h-[130px] object-cover object-center w-full"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-red-500">
                        Please select some gallery images.
                    </p>
                )}
            </div>

            <div>
                <h2 className="my-2">
                    Property category :{" "}
                    {formData.category ? (
                        categories.find(
                            (category) =>
                                category.id == Number(formData.category)
                        )?.title
                    ) : (
                        <p className="text-red-500">Please select a category</p>
                    )}
                </h2>

                <h2 className="md:text-2xl text-xl ">
                    Property title :{" "}
                    {formData.title ? (
                        formData.title
                    ) : (
                        <p className="text-red-500 inline">
                            Please select a title
                        </p>
                    )}
                </h2>

                <div className="flex space-x-3 space-y-2 flex-wrap items-center mb-2">
                    <button className=" hidden"></button>
                    <button className=" !-ml-0 border-[2px]  shadow-md  rounded-lg px-2 py-1">
                        {buttonData.bed_room} bedrooms
                    </button>
                    <button className="border-[2px]  shadow-md  rounded-lg px-2 py-1">
                        {buttonData.bath_room} bathrooms
                    </button>
                    <button className=" border-[2px]  shadow-md  rounded-lg px-2 py-1">
                        {buttonData.minimum_guest} min guest
                    </button>
                    <button className="border-[2px]  shadow-md  rounded-lg px-2 py-1">
                        {buttonData.maximum_guest} max guest
                    </button>
                    <button className="border-[2px]  shadow-md  rounded-lg px-2 py-1">
                        {buttonData.minimum_stay} min stay
                    </button>
                </div>
                <div className="md:flex md:space-x-8 flex-wrap ">
                    <h2 className=" my-2 ">
                        <b>Per day price</b> : ${formData.per_day_price || 0}
                    </h2>
                    <h2 className=" my-2 ">
                        <b>Per guest price</b> : $
                        {formData.per_guest_price || 0}
                    </h2>
                    <h2 className=" my-2 ">
                        <b>Cleaning fee</b> : ${formData.cleaning_fee || 0}
                    </h2>
                </div>
                <div className="md:flex md:space-x-8 flex-wrap ">
                    <h2 className=" my-2 ">
                        <b>Discount price days</b> :{" "}
                        {formData.discount_price_days || 0}days
                    </h2>
                    <h2 className=" my-2 ">
                        <b>Discount parcentage</b> :{" "}
                        {formData.discount_parcentage || 0}%
                    </h2>
                </div>
                <h2 className="my-2">
                    <b>Allowed cancelation days : </b>
                    {formData.allowed_cancelation_days || 0}days
                </h2>
                <h2 className="my-2">
                    <b> Parking area : </b>
                    {parking ? "Available" : "Not available"}
                </h2>

                <h2 className="my-2">
                    <b>Property area : </b>
                    {formData.area || (
                        <button className="text-red-500 ">
                            Please provide property area.
                        </button>
                    )}
                </h2>
                <h2 className="my-2">
                    <b>Location : </b>
                    {formData.location || (
                        <button className="text-red-500 ">
                            Please provide property location.
                        </button>
                    )}
                </h2>
                <div className="md:flex md:space-x-8 flex-wrap ">
                    <h2 className=" my-2 ">
                        <b>Location latitude: </b>
                        {formData.latitude || (
                            <button className="text-red-500 ">
                                Please provide property latitude.
                            </button>
                        )}
                    </h2>
                    <h2 className=" my-2 ">
                        <b>Location longtitude: </b>
                        {formData.longtitude || (
                            <button className="text-red-500 ">
                                Please provide property longtitude.
                            </button>
                        )}
                    </h2>
                </div>

                <div className="my-2">
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
                        <p className="text-red-500 ">
                            Please provide short description.
                        </p>
                    )}
                </div>
                <div className="my-2">
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
                        <p className="text-red-500 ">
                            Please provide description.
                        </p>
                    )}
                </div>

                <div className="my-2">
                    <b>What this place offers</b>
                    {selectedAmenities?.length ? (
                        <div className="flex space-x-4 space-y-3 flex-wrap items-center !-ml-3">
                            <button className="hidden "></button>
                            {selectedAmenities.map((id) => {
                                const amenity = aminites?.find(
                                    (a) => a.id === id
                                );
                                return (
                                    <button
                                        key={id}
                                        className="bg-gray-300 rounded-lg px-2 py-1 ">
                                        {amenity ? amenity.name : ""}
                                    </button>
                                );
                            })}
                        </div>
                    ) : (
                        <>
                            <br />
                            <button className="bg-gray-300 rounded-lg mt-2 px-2 py-1">
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
