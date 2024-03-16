"use client";
import {
    useGetPropertiesAminityQuery,
    useGetPropertiesCategoryQuery,
    useUploadPropertyMutation,
} from "@/redux/api/propertyApi";
import {Step, Stepper} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import SmallLoader from "@/app/components/SmallLoader/SmallLoader";
import {useRouter} from "next/navigation";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const AddListPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);
    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const {user} = useUserContext();

    const {data: categories} = useGetPropertiesCategoryQuery();
    const {data: aminites} = useGetPropertiesAminityQuery();
    const [uploadPropety, {isLoading, isSuccess, isError}] =
        useUploadPropertyMutation();
    const [images, setImages] = useState([]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [guests, setGuests] = useState(0);
    const [parking, setParking] = useState(true);

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

    const handleDecrement = (setter) => {
        setter((prevValue) => Math.max(prevValue - 1, 0));
    };

    const handleIncrement = (setter) => {
        setter((prevValue) => prevValue + 1);
    };

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

    const router = useRouter();

    useEffect(() => {
        if (isSuccess) {
            router.push("/profile_page/host_profile/my_lists");
            toast.success("Property added successfully");
        }
    }, [isSuccess, router]);

    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong. Please try again");
        }
    }, [isError]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (images.length < 3) toast.error("Please upload at least 3 images.");

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

        const propertyFormData = new FormData();

        images.forEach((image) => {
            propertyFormData.append(`upload_image`, image.file);
        });
        selectedAmenities.forEach((iminity) => {
            propertyFormData.append(`amenities_list`, iminity);
        });

        propertyFormData.append("author", user.id);
        propertyFormData.append("category_id", formData.category);
        propertyFormData.append("title", formData.title);
        propertyFormData.append("area", formData.area);
        propertyFormData.append("price", formData.price);
        propertyFormData.append("location", formData.location);
        propertyFormData.append(
            "short_description",
            formData.short_description
        );
        propertyFormData.append("description", formData.description);

        propertyFormData.append("bed_room", bedrooms);
        propertyFormData.append("bath_room", bathrooms);
        propertyFormData.append("guest", guests);
        propertyFormData.append("parking", parking);

        uploadPropety(propertyFormData);
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
                    <Step1
                        images={images}
                        formData={formData}
                        categories={categories}
                        guests={guests}
                        parking={parking}
                        setGuests={setGuests}
                        handleRemoveImage={handleRemoveImage}
                        handleImageChange={handleImageChange}
                        handleInputChange={handleInputChange}
                        handleDecrement={handleDecrement}
                        handleIncrement={handleIncrement}
                        handleParkingChange={handleParkingChange}
                    />
                )}
                {activeStep === 1 && (
                    <Step2
                        aminites={aminites}
                        bedrooms={bedrooms}
                        bathrooms={bathrooms}
                        guests={guests}
                        setGuests={setGuests}
                        setBedrooms={setBedrooms}
                        setBathrooms={setBathrooms}
                        selectedAmenities={selectedAmenities}
                        handleCheckboxChange={handleCheckboxChange}
                        handleDecrement={handleDecrement}
                        handleIncrement={handleIncrement}
                    />
                )}
                {activeStep === 2 && (
                    <Step3
                        images={images}
                        formData={formData}
                        bedrooms={bedrooms}
                        bathrooms={bathrooms}
                        guests={guests}
                        parking={parking}
                        aminites={aminites}
                        selectedAmenities={selectedAmenities}
                    />
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
                    <button
                        disabled={isLoading}
                        type="submit"
                        className={`btn-secondary`}>
                        {isLoading ? <SmallLoader /> : "Submit"}
                    </button>
                )}
            </div>
        </form>
    );
};

export default AddListPage;
