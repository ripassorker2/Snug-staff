import {Checkbox} from "@material-tailwind/react";
import React from "react";

const Step2 = ({
    aminites,
    bedrooms,
    bathrooms,
    guests,
    setGuests,
    setBedrooms,
    setBathrooms,
    selectedAmenities,
    handleCheckboxChange,
    handleDecrement,
    handleIncrement,
}) => {
    return (
        <div className="lg:grid lg:grid-cols-2 gap-x-10 lg:gap-y-3">
            <div className="mt-2 md:col-span-2">
                <label className="block text-base mb-1">
                    Property aminites
                </label>
                <div>
                    {aminites?.map((aminities, index) => (
                        <Checkbox
                            key={index}
                            label={aminities.name}
                            checked={selectedAmenities.includes(aminities.id)}
                            onChange={(e) =>
                                handleCheckboxChange(e, aminities.id)
                            }
                        />
                    ))}
                </div>
            </div>
            <div className="md:col-span-2">
                <div className="mt-4">
                    <h2>Bedroom</h2>
                    <div className="mt-1 flex justify-between text-gray-800">
                        <p className="hidden md:block">
                            Number of beds available
                        </p>
                        <p className="md:hidden block">Number of bedrooms</p>
                        <div>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center mr-2"
                                onClick={() => handleDecrement(setBedrooms)}>
                                -
                            </button>
                            <button type="button" className="px-2 text-lg">
                                {bedrooms}
                            </button>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                onClick={() => handleIncrement(setBedrooms)}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h2>Bathroom</h2>
                    <div className="mt-1 flex justify-between text-gray-800">
                        <p className="hidden md:block">
                            Number of bathrooms available
                        </p>
                        <p className="md:hidden block">Number of bathrooms</p>
                        <div>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center mr-2"
                                onClick={() => handleDecrement(setBathrooms)}>
                                -
                            </button>
                            <button type="button" className="px-2 text-lg">
                                {bathrooms}
                            </button>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                onClick={() => handleIncrement(setBathrooms)}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-4 col-span-2">
                    <h2>Guest</h2>
                    <div className="mt-1 flex justify-between text-gray-800">
                        <p>Capacity of guests</p>
                        <div>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center mr-2"
                                onClick={() => handleDecrement(setGuests)}>
                                -
                            </button>
                            <button type="button" className="px-2 text-lg">
                                {guests}
                            </button>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                onClick={() => handleIncrement(setGuests)}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step2;
