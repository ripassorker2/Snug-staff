import Image from "next/image";
import React from "react";
import {IoCloudUploadOutline} from "react-icons/io5";
import {MdOutlineCancel} from "react-icons/md";

const Step1 = ({
    images,
    formData,
    categories,
    parking,
    handleRemoveImage,
    handleImageChange,
    handleInputChange,
    handleParkingChange,
}) => {
    return (
        <div className="lg:grid lg:grid-cols-2  gap-x-10 gap-y-3">
            <div className="lg:col-span-2">
                <h2 className="my-2">Property images</h2>
                <div className="grid md:grid-cols-3 gap-3 grid-cols-2">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative ${
                                index == 0 ? "md:col-span-3 col-span-2" : ""
                            }`}>
                            <Image
                                src={image.preview}
                                alt={`Preview ${index}`}
                                height={200}
                                width={200}
                                className={`rounded-md object-cover object-center w-full ${
                                    index == 0
                                        ? "md:h-[350px] h-[230px]  "
                                        : "md:h-[160px] h-[130px] "
                                }`}
                            />
                            <MdOutlineCancel
                                size={22}
                                onClick={() => handleRemoveImage(index)}
                                className="absolute top-2 right-2 rounded-full text-primary cursor-pointer"
                            />
                        </div>
                    ))}
                    <div className={` ${!images.length && "md:col-span-3"}`}>
                        <label
                            htmlFor="image-file"
                            className="cursor-pointer  border border-gray-400 md:p-10 p-5 flex flex-col rounded-md items-center text-center col-span-1 md:h-[160px]">
                            <IoCloudUploadOutline
                                size={35}
                                className="mr-1 font-semibold text-primary"
                            />
                            <span>
                                Upload{" "}
                                <span className="hidden md:block">
                                    property images
                                </span>{" "}
                            </span>
                            <input
                                type="file"
                                id="image-file"
                                accept=".png,.jpg,.jpeg,.pdf,.webp"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div className="mt-2 lg:col-span-2">
                <label htmlFor="category" className="block text-base mb-1">
                    Property category
                </label>
                <select
                    className="input-feild"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required>
                    <option value="" disabled>
                        Select one category ...
                    </option>
                    {categories?.map((category, index) => (
                        <option key={index} value={category.title}>
                            {category.title}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mt-2">
                <label htmlFor="title" className="block text-base mb-1">
                    Property title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="input-feild"
                    placeholder="Enter property title ..."
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mt-2">
                <label htmlFor="price" className="block text-base mb-1">
                    Property price
                </label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    className="input-feild"
                    placeholder="Enter property price..."
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                />
            </div>
            {/* <div className="mt-4 col-span-2">
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
            </div> */}
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
            <div className="mt-2 lg:col-span-2">
                <label htmlFor="area" className="block text-base mb-1">
                    Property total area
                </label>
                <input
                    type="number"
                    id="area"
                    name="area"
                    className="input-feild"
                    placeholder="Enter total property area..."
                    value={formData.area}
                    onChange={handleInputChange}
                    required
                />
            </div>
            {/* <div className="mt-2 col-span-2">
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
            </div> */}
            <div className="mt-2">
                <label htmlFor="location" className="block text-base mb-1">
                    Property location
                </label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    className="input-feild"
                    placeholder="Enter property location..."
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mt-2">
                <label
                    htmlFor="short_description"
                    className="block text-base mb-1">
                    Property short description
                </label>
                <textarea
                    type="text"
                    id="short_description"
                    name="short_description"
                    className="input-feild resize-none h-11"
                    placeholder="Enter property short description..."
                    value={formData.short_description}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mt-2 lg:col-span-2">
                <label htmlFor="description" className="block text-base mb-1">
                    Property description
                </label>
                <textarea
                    id="description"
                    name="description"
                    className="border-2 border-gray-500 rounded w-full py-3 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-600 text-gray-800 resize-none"
                    placeholder="Enter property description..."
                    value={formData.description}
                    onChange={handleInputChange}
                    required></textarea>
            </div>
        </div>
    );
};

export default Step1;
