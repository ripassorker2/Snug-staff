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
import {useUpdateProfileMutation} from "@/redux/api/utilsApiSlice";

const AddListPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);
    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const {user} = useUserContext();

    const {data: categories} = useGetPropertiesCategoryQuery();
    const {data: aminites} = useGetPropertiesAminityQuery();
    const [uploadProperty, {}] = useUpdateProfileMutation();

    const [images, setImages] = useState([]);
    const [documents, setDocuments] = useState([]);
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

    const handleDocumentChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setDocuments([
                    ...documents,
                    {file: selectedFile, preview: e.target.result},
                ]);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };
    const handleRemoveDocument = (index) => {
        setDocuments(documents.filter((_, i) => i !== index));
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

    const [parking, setParking] = useState(false);

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

        const imagesData = new FormData();
        images.forEach((image, index) => {
            imagesData.append(`image${index}`, image.file);
        });

        const doscData = new FormData();
        documents.forEach((docs, index) => {
            doscData.append(`docs${index}`, docs.file);
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
            property_document: Array.from(doscData?.entries()).map(
                ([key, value]) => ({document: value})
            ),
        };

        console.log(propertiesData);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}>
                <Step onClick={() => setActiveStep(0)}>1</Step>
                <Step onClick={() => setActiveStep(1)}>2</Step>
                <Step onClick={() => setActiveStep(2)}>3</Step>
            </Stepper>
            <div className="mt-5">
                <div className="sub-head mb-3">
                    <span>Add property</span>
                </div>
                {activeStep === 0 && (
                    <div className="lg:grid lg:grid-cols-2 gap-x-10 md:gap-y-3">
                        <div className="col-span-2">
                            <h2 className="my-2">Property images</h2>
                            <div className="grid lg:grid-cols-3 gap-3 grid-cols-2">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`relative ${
                                            index == 0 && " col-span-3"
                                        }`}>
                                        <Image
                                            src={image.preview}
                                            alt={`Preview ${index}`}
                                            height={200}
                                            width={200}
                                            className={`rounded-md object-cover  object-center w-full ${
                                                index == 0
                                                    ? "h-[350px]  "
                                                    : "h-[160px]"
                                            }`}
                                        />
                                        <MdOutlineCancel
                                            size={22}
                                            onClick={() =>
                                                handleRemoveImage(index)
                                            }
                                            className="absolute top-2 right-2 rounded-full text-gray-900 cursor-pointer"
                                        />
                                    </div>
                                ))}
                                <div>
                                    <label
                                        htmlFor="image-file"
                                        className="cursor-pointer border border-gray-400 p-10 flex flex-col rounded-md items-center text-center col-span-1">
                                        <IoCloudUploadOutline
                                            size={25}
                                            className="mr-1 font-semibold text-primary"
                                        />
                                        <span>Upload images</span>
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
                        <div className="mt-2">
                            <label
                                htmlFor="category"
                                className="block text-base mb-1">
                                Category name
                            </label>
                            <select
                                className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                required>
                                <option value="" disabled>
                                    Select category ...
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
                                className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                placeholder="Enter title ..."
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="area"
                                className="block text-base mb-1">
                                Property area
                            </label>
                            <input
                                type="number"
                                id="area"
                                name="area"
                                className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                placeholder="Enter area..."
                                value={formData.area}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="price"
                                className="block text-base mb-1">
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                placeholder="Enter price..."
                                value={formData.price}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="location"
                                className="block text-base mb-1">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                placeholder="Enter location..."
                                value={formData.location}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="short_description"
                                className="block text-base mb-1">
                                Short description
                            </label>
                            <input
                                type="text"
                                id="short_description"
                                name="short_description"
                                className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                placeholder="Enter short description..."
                                value={formData.short_description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="description"
                                className="block text-base mb-1">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                className="border border-gray-500 rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700 resize-none"
                                placeholder="Enter description..."
                                value={formData.description}
                                onChange={handleInputChange}
                                required></textarea>
                        </div>
                    </div>
                )}
                {activeStep === 1 && (
                    <div className="lg:grid lg:grid-cols-2 gap-x-10 lg:gap-y-3">
                        <div className="mt-2 col-span-2">
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
                        <div>
                            <div className="mt-2">
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
                                            className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center mr-2"
                                            onClick={() =>
                                                handleDecrement(setBedrooms)
                                            }>
                                            -
                                        </button>
                                        <button className="px-2 text-lg">
                                            {bedrooms}
                                        </button>
                                        <button
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
                                            className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center mr-2"
                                            onClick={() =>
                                                handleDecrement(setBathrooms)
                                            }>
                                            -
                                        </button>
                                        <button className="px-2 text-lg">
                                            {bathrooms}
                                        </button>
                                        <button
                                            className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                            onClick={() =>
                                                handleIncrement(setBathrooms)
                                            }>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h2>Guest</h2>
                                <div className="mt-1 flex justify-between text-gray-800">
                                    <p>Capacity of guests</p>
                                    <div>
                                        <button
                                            className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center mr-2"
                                            onClick={() =>
                                                handleDecrement(setGuests)
                                            }>
                                            -
                                        </button>
                                        <button className="px-2 text-lg">
                                            {guests}
                                        </button>
                                        <button
                                            className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                            onClick={() =>
                                                handleIncrement(setGuests)
                                            }>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* <div>
                                <h2 className="my-2">Property images</h2>
                                <div className="grid lg:grid-cols-3 gap-3 grid-cols-2">
                                    {images.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`relative ${
                                                index == 0 && " col-span-3"
                                            }`}>
                                            <Image
                                                src={image.preview}
                                                alt={`Preview ${index}`}
                                                height={200}
                                                width={200}
                                                className={`rounded-md object-cover  object-center w-full ${
                                                    index == 0
                                                        ? "h-[250px]  "
                                                        : "h-[140px]"
                                                }`}
                                            />
                                            <MdOutlineCancel
                                                size={22}
                                                onClick={() =>
                                                    handleRemoveImage(index)
                                                }
                                                className="absolute top-2 right-2 rounded-full text-gray-900 cursor-pointer"
                                            />
                                        </div>
                                    ))}
                                    <div>
                                        <label
                                            htmlFor="image-file"
                                            className="cursor-pointer border border-gray-400 p-8 flex flex-col rounded-md items-center text-center col-span-1">
                                            <IoCloudUploadOutline
                                                size={25}
                                                className="mr-1 font-semibold text-primary"
                                            />
                                            <span>Upload images</span>
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
                            </div> */}
                            <div>
                                <h2 className="mt-6">Property documents</h2>
                                <div className="grid lg:grid-cols-3 gap-3 grid-cols-2 mt-2">
                                    {documents.map((doc, index) => (
                                        <div key={index} className={`relative`}>
                                            <Image
                                                src={doc.preview}
                                                alt={`Preview ${index}`}
                                                width={200}
                                                height={200}
                                                className={`rounded-md object-cover object-center w-full h-[140px]`}
                                            />
                                            <MdOutlineCancel
                                                size={22}
                                                onClick={() =>
                                                    handleRemoveDocument(index)
                                                }
                                                className="absolute top-2 right-2 rounded-full text-gray-900 cursor-pointer"
                                            />
                                        </div>
                                    ))}
                                    <div>
                                        <label
                                            htmlFor="document-file"
                                            className=" cursor-pointer border border-gray-400 p-8 flex flex-col rounded-md items-center text-center col-span-1">
                                            <IoCloudUploadOutline
                                                size={25}
                                                className="mr-1 font-semibold text-primary"
                                            />
                                            <span>Upload documents</span>
                                            <input
                                                type="file"
                                                id="document-file"
                                                accept=".png,.jpg,.jpeg,.pdf,.webp"
                                                className="hidden"
                                                onChange={handleDocumentChange}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeStep === 2 && (
                    <div className="md:grid md:grid-cols-2 gap-x-10 md:gap-y-3">
                        hi 3
                    </div>
                )}
            </div>
            <div
                className={`mt-6 flex  ${
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
