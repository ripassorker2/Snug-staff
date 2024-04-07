import React from "react";

const Step2 = ({
    parking,
    formData,
    buttonData,
    handleDecrement,
    handleIncrement,
    handleInputChange,
    handleParkingChange,
}) => {
    return (
        <div className="grid lg:grid-cols-2 gap-x-10 lg:gap-y-3">
            <div className="mt-2 col-span-2">
                <h2 className="mb-2 text-base">Parking area</h2>
                <div className="flex space-x-6 mt-2">
                    <label className="flex items-center space-x-2 text-gray-700">
                        <input
                            type="radio"
                            name="parking"
                            value={true}
                            checked={parking === true}
                            onChange={handleParkingChange}
                        />
                        <p>Yes</p>
                    </label>
                    <label className="flex items-center space-x-2 text-gray-700">
                        <input
                            type="radio"
                            name="parking"
                            value={false}
                            checked={parking === false}
                            onChange={handleParkingChange}
                        />
                        <p>No</p>
                    </label>
                </div>
            </div>
            <div className="mt-2 ">
                <label htmlFor="price" className="block text-base mb-1">
                    Per day price
                </label>
                <input
                    type="number"
                    id="per_day_price"
                    name="per_day_price"
                    className="input-feild"
                    placeholder="Enter day price..."
                    value={formData.per_day_price}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mt-2 ">
                <label htmlFor="price" className="block text-base mb-1">
                    Per guest price
                </label>
                <input
                    type="number"
                    id="per_guest_price"
                    name="per_guest_price"
                    className="input-feild"
                    placeholder="Enter guest price..."
                    value={formData.per_guest_price}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mt-2 ">
                <label htmlFor="price" className="block text-base mb-1">
                    Cleaning fee
                </label>
                <input
                    type="number"
                    id="cleaning_fee"
                    name="cleaning_fee"
                    className="input-feild"
                    placeholder="Enter cleaning fee..."
                    value={formData.cleaning_fee}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mt-2 ">
                <label htmlFor="price" className="block text-base mb-1">
                    Discount price days
                </label>
                <input
                    type="number"
                    id="discount_price_days"
                    name="discount_price_days"
                    className="input-feild"
                    placeholder="Enter discount price days..."
                    value={formData.discount_price_days}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mt-2 ">
                <label htmlFor="price" className="block text-base mb-1">
                    Discount parcentage (%)
                </label>
                <input
                    type="number"
                    id="discount_parcentage"
                    name="discount_parcentage"
                    className="input-feild"
                    placeholder="Enter discount parcentage..."
                    value={formData.discount_parcentage}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mt-2 ">
                <label htmlFor="price" className="block text-base mb-1">
                    Allowed cancelation days
                </label>
                <input
                    type="number"
                    id="allowed_cancelation_days"
                    name="allowed_cancelation_days"
                    className="input-feild"
                    placeholder="Enter allowed cancelation days..."
                    value={formData.allowed_cancelation_days}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="grid col-span-2 lg:grid-cols-2 gap-x-8 ">
                <div className="mt-4">
                    <h2>Bedroom</h2>
                    <div className="mt-1 flex justify-between text-gray-800">
                        <p className="hidden md:block">Number of bedrooms</p>
                        <div>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center mr-2"
                                onClick={() => handleDecrement("bed_room")}>
                                -
                            </button>
                            <button type="button" className="px-2 text-lg">
                                {buttonData.bed_room}
                            </button>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                onClick={() => handleIncrement("bed_room")}>
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
                                onClick={() => handleDecrement("bath_room")}>
                                -
                            </button>
                            <button type="button" className="px-2 text-lg">
                                {buttonData.bath_room}
                            </button>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                onClick={() => handleIncrement("bath_room")}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-4 ">
                    <h2>Guest</h2>
                    <div className="mt-1 flex justify-between text-gray-800">
                        <p>Minimum guest</p>
                        <div>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center mr-2"
                                onClick={() =>
                                    handleDecrement("minimum_guest")
                                }>
                                -
                            </button>
                            <button type="button" className="px-2 text-lg">
                                {buttonData.minimum_guest}
                            </button>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                onClick={() =>
                                    handleIncrement("minimum_guest")
                                }>
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-4 ">
                    <h2>Guest</h2>
                    <div className="mt-1 flex justify-between text-gray-800">
                        <p>Maximum guest</p>
                        <div>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center mr-2"
                                onClick={() =>
                                    handleDecrement("maximum_guest")
                                }>
                                -
                            </button>
                            <button type="button" className="px-2 text-lg">
                                {buttonData?.maximum_guest}
                            </button>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                onClick={() =>
                                    handleIncrement("maximum_guest")
                                }>
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-4 ">
                    <h2>Stay</h2>
                    <div className="mt-1 flex justify-between text-gray-800">
                        <p>Minimum staying days</p>
                        <div>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center mr-2"
                                onClick={() => handleDecrement("minimum_stay")}>
                                -
                            </button>
                            <button type="button" className="px-2 text-lg">
                                {buttonData?.minimum_stay}
                            </button>
                            <button
                                type="button"
                                className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                onClick={() => handleIncrement("minimum_stay")}>
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
