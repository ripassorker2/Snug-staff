/* eslint-disable @next/next/no-img-element */
"use client";
import Loading from "@/app/profile_page/loading";
import {useGetPropertyDetailsQuery} from "@/redux/api/propertyApi";
import EditImages from "../EditImages";
import {useEffect, useState} from "react";

const PropertyUpdatePage = ({params}) => {
    const {data: property, isLoading} = useGetPropertyDetailsQuery({
        slug: params.slug,
    });
    const [parking, setParking] = useState(true);
    const [formData, setFormData] = useState({
        title: property?.title || "",
        area: property?.area,
        location: "",
        latitude: "",
        longtitude: "",
        short_description: "",
        description: "",
        per_day_price: "",
        per_guest_price: "",
        cleaning_fee: "",
        discount_price_days: "",
        discount_parcentage: "",
        allowed_cancelation_days: "",
    });
    const [buttonData, setButtonData] = useState({
        bed_room: 0,
        bath_room: 0,
        minimum_guest: 0,
        maximum_guest: 0,
        minimum_stay: 0,
    });

    useEffect(() => {
        if (property) {
            setFormData({
                title: property.title || "",
                area: property.area || "",
                location: property.location || "",
                latitude: property.latitude || "",
                longtitude: property.longtitude || "",
                short_description: property.short_description || "",
                description: property.description || "",
                per_day_price: property.per_day_price || "",
                per_guest_price: property.per_guest_price || "",
                cleaning_fee: property.cleaning_fee || "",
                discount_price_days: property.discount_price_days || "",
                discount_parcentage: property.discount_parcentage || "",
                allowed_cancelation_days:
                    property.allowed_cancelation_days || "",
            });

            setButtonData({
                bed_room: property.bed_room || 0,
                bath_room: property.bath_room || 0,
                minimum_guest: property.minimum_guest || 0,
                maximum_guest: property.maximum_guest || 0,
                minimum_stay: property.minimum_stay || 0,
            });
            setParking(property.parking);
        }
    }, [property]);

    const handleParkingChange = (e) => {
        setParking(e.target.value === "true");
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDecrement = (field) => {
        setButtonData((prevData) => ({
            ...prevData,
            [field]: Math.max(prevData[field] - 1, 0),
        }));
    };
    const handleIncrement = (field) => {
        setButtonData((prevData) => ({
            ...prevData,
            [field]: prevData[field] + 1,
        }));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(buttonData);
    };

    if (isLoading) return <Loading />;

    return (
        <div className="container">
            <div>
                <EditImages property={property} />
            </div>
            <form onSubmit={handleUpdate} className="mt-10">
                <div className="md:grid md:grid-cols-2  gap-x-10 gap-y-3">
                    <div className="mt-2 col-span-2">
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
                            className="input-feild"
                            placeholder="Enter property location..."
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="longtitude"
                            className="block text-base mb-1">
                            Property location longtitude
                        </label>
                        <input
                            type="number"
                            id="longtitude"
                            name="longtitude"
                            className="input-feild"
                            placeholder="Enter property location longtitude..."
                            value={formData.longtitude}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="latitude"
                            className="block text-base mb-1">
                            Property location latitude
                        </label>
                        <input
                            type="number"
                            id="latitude"
                            name="latitude"
                            className="input-feild"
                            placeholder="Enter property location latitude..."
                            value={formData.latitude}
                            onChange={handleInputChange}
                            required
                        />
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
                            className="input-feild  py-3 text-gray-800 resize-none"
                            placeholder="Enter property short description..."
                            value={formData.short_description}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mt-2 ">
                        <label
                            htmlFor="description"
                            className="block text-base mb-1">
                            Property description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="input-feild  py-3 text-gray-800 resize-none"
                            placeholder="Enter property description..."
                            value={formData.description}
                            onChange={handleInputChange}
                            required></textarea>
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
                    <div className="grid col-span-2 lg:grid-cols-2 gap-x-8 ">
                        <div className="mt-4">
                            <h2>Bedroom</h2>
                            <div className="mt-1 flex justify-between text-gray-800">
                                <p className="block">Number of bedrooms</p>
                                <div>
                                    <button
                                        type="button"
                                        className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center mr-2"
                                        onClick={() =>
                                            handleDecrement("bed_room")
                                        }>
                                        -
                                    </button>
                                    <button
                                        type="button"
                                        className="px-2 text-lg">
                                        {buttonData.bed_room}
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                        onClick={() =>
                                            handleIncrement("bed_room")
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
                                            handleDecrement("bath_room")
                                        }>
                                        -
                                    </button>
                                    <button
                                        type="button"
                                        className="px-2 text-lg">
                                        {buttonData.bath_room}
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                        onClick={() =>
                                            handleIncrement("bath_room")
                                        }>
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
                                    <button
                                        type="button"
                                        className="px-2 text-lg">
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
                                    <button
                                        type="button"
                                        className="px-2 text-lg">
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
                                        onClick={() =>
                                            handleDecrement("minimum_stay")
                                        }>
                                        -
                                    </button>
                                    <button
                                        type="button"
                                        className="px-2 text-lg">
                                        {buttonData?.minimum_stay}
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-secondary p-2 rounded-full text-gray-200 w-6 h-6 inline-flex items-center justify-center ml-2"
                                        onClick={() =>
                                            handleIncrement("minimum_stay")
                                        }>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="mt-2 md:col-span-2">
                        <label className="block text-base mb-1">
                            Property aminites
                        </label>
                        <div>
                            {aminites?.map((aminities, index) => (
                                <Checkbox
                                    key={index}
                                    label={aminities.name}
                                    checked={selectedAmenities.includes(
                                        aminities.id
                                    )}
                                    onChange={(e) =>
                                        handleCheckboxChange(e, aminities.id)
                                    }
                                />
                            ))}
                        </div>
                    </div> */}
                </div>
                <div className="flex justify-end mt-6">
                    <button type="submit" className="btn-secondary">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PropertyUpdatePage;
