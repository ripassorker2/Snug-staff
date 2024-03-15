/* eslint-disable no-unused-vars */
"use client";
import {
    useGetPropertiesAminityQuery,
    useGetPropertiesCategoryQuery,
} from "@/redux/api/propertyApi";
import {Checkbox, Step, Stepper} from "@material-tailwind/react";
import Image from "next/image";
import {useState} from "react";
import {MdOutlineCancel} from "react-icons/md";
import {IoCloudUploadOutline} from "react-icons/io5";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const AddListPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);
    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const {user} = useUserContext();

    const {data: categories} = useGetPropertiesCategoryQuery();
    const {data: aminites} = useGetPropertiesAminityQuery();
    const [images, setImages] = useState([]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const handleCheckboxChange = (e, name) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setSelectedAmenities([...selectedAmenities, name]);
        } else {
            setSelectedAmenities(
                selectedAmenities.filter((item) => item !== name)
            );
        }
    };

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImages([
                    ...images,
                    {file: selectedFile, preview: e.target.result},
                ]);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [guests, setGuests] = useState(0);

    const handleDecrement = (setter) => {
        setter((prevValue) => Math.max(prevValue - 1, 0));
    };

    const handleIncrement = (setter) => {
        setter((prevValue) => prevValue + 1);
    };

    const [parking, setParking] = useState(true);

    const handleParkingChange = (e) => {
        setParking(e.target.value === "true");
    };

    const [formData, setFormData] = useState({
        category: "",
        title: "",
        area: "",
        price: "",
        location: "",
        short_description: "",
        description: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (images.length < 4)
            return toast.error("Please upload at least 4 images.");

        if (
            !formData.category ||
            !formData.title ||
            !formData.area ||
            !formData.price ||
            !formData.location ||
            !formData.short_description ||
            !formData.description
        ) {
            return toast.error("Please fill out all required fields.");
        }

        const imagesData = new FormData();
        images.forEach((image, index) => {
            imagesData.append(`image${index}`, image.file);
        });

        const propertiesData = {
            author: user?.id,
            category: formData?.category,
            title: formData?.title,
            area: formData?.area,
            price: formData?.price,
            location: formData?.location,
            short_description: formData?.short_description,
            description: formData.description,
            property_images: Array.from(imagesData?.entries()).map(
                ([key, value]) => ({image: value})
            ),
            bed_room: bedrooms,
            bath_room: bathrooms,
            guest: guests,
            parking,
            aminites: selectedAmenities.map((name) => ({name})),
        };

        console.log(propertiesData);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 md:mb-10">
            <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}>
                <Step onClick={() => setActiveStep(0)}>1</Step>
                <Step onClick={() => setActiveStep(1)}>2</Step>
                <Step onClick={() => setActiveStep(2)}>3</Step>
            </Stepper>
            <div className="mt-5">
                {activeStep === 0 && (
                    <div className="grid lg:grid-cols-2 gap-x-10 gap-y-3">
                        <div className="lg:col-span-2">
                            <h2 className="my-2">Property images</h2>
                            <div className="grid md:grid-cols-3 gap-3 grid-cols-2">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`relative ${
                                            index == 0 ? "md:col-span-3" : ""
                                        }`}>
                                        <Image
                                            src={image.preview}
                                            alt={`Preview ${index}`}
                                            height={200}
                                            width={200}
                                            className={`rounded-md h-[130px] object-cover object-center w-full ${
                                                index == 0
                                                    ? "md:h-[350px] "
                                                    : "md:h-[160px]"
                                            }`}
                                        />
                                        <MdOutlineCancel
                                            size={22}
                                            onClick={() =>
                                                handleRemoveImage(index)
                                            }
                                            className="absolute top-2 right-2 rounded-full text-primary cursor-pointer"
                                        />
                                    </div>
                                ))}
                                <div className="m-auto md:col-span-3">
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
                            <label
                                htmlFor="category"
                                className="block text-base mb-1">
                                Property category
                            </label>
                            <select
                                className="border-2 border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-600 text-gray-800"
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
                            <label
                                htmlFor="title"
                                className="block text-base mb-1">
                                Property title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="border-2 border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-600 text-gray-800"
                                placeholder="Enter property title ..."
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="price"
                                className="block text-base mb-1">
                                Property price
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                className="border-2 border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-600 text-gray-800"
                                placeholder="Enter property price..."
                                value={formData.price}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mt-4 col-span-2">
                            <h2>Guest</h2>
                            <div className="mt-1 flex justify-between text-gray-800">
                                <p>Capacity of guests</p>
                                <div>
                                    <button
                                        type="button"
                                        className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center mr-2"
                                        onClick={() =>
                                            handleDecrement(setGuests)
                                        }>
                                        -
                                    </button>
                                    <button
                                        type="button"
                                        className="px-2 text-lg">
                                        {guests}
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                        onClick={() =>
                                            handleIncrement(setGuests)
                                        }>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 lg:col-span-2">
                            <label
                                htmlFor="area"
                                className="block text-base mb-1">
                                Property total area
                            </label>
                            <input
                                type="number"
                                id="area"
                                name="area"
                                className="border-2 border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-600 text-gray-800"
                                placeholder="Enter total property area..."
                                value={formData.area}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
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

                        <div className="mt-2">
                            <label
                                htmlFor="location"
                                className="block text-base mb-1">
                                Property location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                className="border-2 border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-600 text-gray-800"
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
                                className="border-2 border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-600 text-gray-800 resize-none h-11"
                                placeholder="Enter property short description..."
                                value={formData.short_description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mt-2 lg:col-span-2">
                            <label
                                htmlFor="description"
                                className="block text-base mb-1">
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
                )}
                {activeStep === 1 && (
                    <div className="lg:grid lg:grid-cols-2 gap-x-10 lg:gap-y-3">
                        <div className="mt-2 lg:col-span-2">
                            <label className="block text-base mb-1">
                                Property aminites
                            </label>
                            <div>
                                {aminites?.map((aminities, index) => (
                                    <Checkbox
                                        key={index}
                                        label={aminities.name}
                                        checked={selectedAmenities.includes(
                                            aminities.name
                                        )}
                                        onChange={(e) =>
                                            handleCheckboxChange(
                                                e,
                                                aminities.name
                                            )
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                        {/* parking , bedroom , bathrooms , guest */}
                        <div>
                            <div className="mt-4">
                                <h2>Bedroom</h2>
                                <div className="mt-1 flex justify-between text-gray-800">
                                    <p className="hidden md:block">
                                        Number of beds available
                                    </p>
                                    <p className="md:hidden block">
                                        Number of bedrooms
                                    </p>
                                    <div>
                                        <button
                                            type="button"
                                            className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center mr-2"
                                            onClick={() =>
                                                handleDecrement(setBedrooms)
                                            }>
                                            -
                                        </button>
                                        <button
                                            type="button"
                                            className="px-2 text-lg">
                                            {bedrooms}
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                            onClick={() =>
                                                handleIncrement(setBedrooms)
                                            }>
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
                                    <p className="md:hidden block">
                                        Number of bathrooms
                                    </p>
                                    <div>
                                        <button
                                            type="button"
                                            className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center mr-2"
                                            onClick={() =>
                                                handleDecrement(setBathrooms)
                                            }>
                                            -
                                        </button>
                                        <button
                                            type="button"
                                            className="px-2 text-lg">
                                            {bathrooms}
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                            onClick={() =>
                                                handleIncrement(setBathrooms)
                                            }>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeStep === 2 && (
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
                                Property category :{" "}
                                {formData.category || "none"}
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
                )}
            </div>
            <div
                className={`mt-7 flex ${activeStep != 0 && "space-x-3"}  ${
                    activeStep === 1 || 2 ? "justify-between" : "justify-end"
                }`}>
                <div
                    className={`btn-primary ${activeStep === 0 && "hidden"}`}
                    onClick={handlePrev}
                    disabled={isFirstStep}>
                    Prev
                </div>
                <div
                    className={`btn-primary ${activeStep === 2 && "hidden"}`}
                    onClick={handleNext}
                    disabled={isLastStep}>
                    Next
                </div>
                {activeStep === 2 && (
                    <button type="submit" className={`btn-secondary`}>
                        Submit
                    </button>
                )}
            </div>
        </form>
    );
};

export default AddListPage;
